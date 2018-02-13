const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const path = require("path")
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const morgan = require('morgan')
const passport = require("passport")
const FacebookStrategy = require('passport-facebook').Strategy;
const cookieParser = require('cookie-parser')
const AuthController = require(path.resolve(__dirname, "./controllers/AuthController"))
require('./jwt/jwt');
console.log("Starting a server...");
const chalk = require("chalk");
console.log(process.env.APP_URL)
app.enable("trust proxy");
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(express.static(path.resolve('./docs')))
app.use(express.static(path.resolve('./app')))
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(process.env.MONGOLAB_URI , () => {});
  mongoose.connection.once('open', function() {
            console.log('MongoDB event open');
             app.listen(process.env.PORT || 5000, () => {
     console.log("Online");
 })
           
 })

//Session check
let sessionManager = []

let sessionCheck = (userId, poll_id) => {
 console.log(chalk.red(poll_id))
 let ind = sessionManager.findIndex(
  (user) => {
   if (user.id.toString() == userId) 
   return true
  });
 if (ind < 0) {
  sessionManager.push({id: userId, lastPollAt: 0, pollsAdded: 0, polls: []});
  ind = sessionManager.length - 1; 
 }
 console.log(Date.now() - sessionManager[ind].lastPollAt)
 console.log(chalk.yellow(ind, JSON.stringify(sessionManager), poll_id));
 if (!poll_id) {

  
   if (sessionManager[ind].pollsAdded < 3) {
     console.log("Session check: New Poll")
     sessionManager[ind].pollsAdded++;
     sessionManager[ind].lastPollAt = Date.now();
     return true
  }  
  
  
  else if (Date.now() - sessionManager[ind].lastPollAt >= 86400000) {
     console.log("Session check: Reset")
     sessionManager[ind].pollsAdded = 1;
     sessionManager[ind].lastPollAt = Date.now();
     return true
  }
   
   else {
   
   console.log("Session check: Aborted"); 
   return false
   
  }
   
 } else {
  
   let pollInd = sessionManager[ind].polls.findIndex((poll) => {if (poll.id == poll_id.toString()) return true})
   console.log(pollInd)
   if ((pollInd) < 0) {
    sessionManager[ind].polls.push({id: poll_id, lastAt: 0, amount: 0})
    pollInd = sessionManager[ind].polls.length - 1
    
   }
     console.log(JSON.stringify(sessionManager), Date.now())
   
     if (sessionManager[ind].polls[pollInd].amount < 2) {
     console.log("Session check: New Poll Option")
     sessionManager[ind].polls[pollInd].amount++;
     sessionManager[ind].polls[pollInd].lastAt = Date.now();
     return true
  }  
  
  
  else if (Date.now() - sessionManager[ind].polls[pollInd].lastAt >= 86400000) {
     console.log("Session check: Reset")
     sessionManager[ind].polls[pollInd].amount = 1;
     sessionManager[ind].polls[pollInd].lastAt = Date.now();
     return true
  }
   
   else {
   
   console.log("Session check: Aborted"); 
   return false
   
  }
 }
}

///////////////////////// 
//Routing
////////////////////////

app.get("*", (req, res, next) => {
    console.log(req.protocol, req.secure);
    console.log("Getting url: ", req.url.substring(0, 5));
    let urlType = req.url.substring(0, 5)
if ((urlType !== "/api/") && (urlType !== "/auth")) {    
 console.log(req.url, "serving start page!");
 res.sendFile(path.resolve('./docs/index.html'));

} else next();

})


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.APP_URL +  "auth/facebook/callback",
    profileFields: ['id', 'first_name', 'gender', 'last_name', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    let UserModel = require("./mongo/UserModel")
    UserModel.findOne({socialID: profile.id}, (err, doc) => {
     if (!err) {
       if (!doc) {
         let newUser = new UserModel({socialID: profile.id, socialProvider: "facebook", firstName: profile["first_name"],
         lastName: profile["last_name"]})
         newUser.save();
         done(null, profile);
       } 
     }
    })
    done(null, profile);
    
  }
));


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/fail', session: false}), AuthController.generateUserToken)

app.get("/api/userPolls", function(req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
    
    if (info) {
     res.status(401).send(info.message) 
     } else {
      var PollModel = require("./mongo/PollModel");
      PollModel.find({creatorID: user["_id"]}, (err, polls) => {
       if (!err) { 
       console.log("Sending Polls...");
       res.send(polls)
       }
      })
     }
 
}
)(req, res, next)}
)

app.post("/api/createNewPoll", function(req, res, next) {
   //console.log("wow")
    if (!req.cookies.userToken)
    {
     console.log("No auth token on with request: ")
     res.status(401).send("No auth token")
    } 
    else {
     
  passport.authenticate('jwt', function(err, user, info) {
    console.log(info);
    if (info) {
     res.status(401).send(info.message) 
     } else {
      if (!sessionCheck(user["_id"])) {console.log("Poll Limit Detected!"); res.status(423).send(`Poll Creation Limit Reached! \n Please, wait for 1 hour since creating last poll! \nSorry :(`); return};
   var PollModel = require("./mongo/PollModel");
   var data = JSON.parse(req.query.data)
   var options = data.options.map((opt) => {return {name: opt, votes: 0, voters: []}})
   console.log(user);
   console.log('Creating a poll named "' + data.name + '"');
   let newPoll = new PollModel({name: data.name, options: options, creatorID: user["_id"] })
   newPoll.save((err) => {
    if (!err) {
     res.send("success");
    }
   });
      }
    })(req, res, next)
  }
}
) 


app.get("/api/vote", (req, res, next) => {
 
     if (!req.cookies.userToken)
    {
     console.log("No auth token on with request: ")
     res.status(401).send(`No auth token\nPlease, Authorize!`)
    } 
    else {
     
  passport.authenticate('jwt', function(err, user, info) {
    console.log(info);
    if (info) {
     res.status(401).send(info.message) 
     } else {
       if (req.query.optName) {
       if (!sessionCheck(user["_id"], req.query.pollId)) {
        console.log("Poll Options Limit Detected!"); res.status(423)
       .send(`Poll Option Creation Limit Reached! \n Please, wait for 1 hour since creating last poll option! \nSorry :(`);
       return
        
       };
       }
   
      
   var PollModel = require("./mongo/PollModel");

    PollModel.findById(req.query.pollId, (err, doc) => {
    if (!err) {
    doc.options.forEach((el, ind) => {
     let userVote = el.voters.findIndex((voter) => {
      if (voter == user["_id"]) {
       return true;
      }
      
      
     
     })
     
      if (userVote != -1) {
      //console.log(newVoters);
      doc.options[ind].votes--;
      doc.options[ind].voters.splice(userVote, 1);
      console.log(doc.options[ind].voters)
      }
     
      
      
    })
    
    if (req.query.optId) {
     console.log("Existing option")
    let ind = doc.options.findIndex((el) => {
     if (el["_id"] == req.query.optId) {
      return true
     } 
    });
  
    doc.options[ind].votes++;
    doc.options[ind].voters.push(user._id);
    console.log(doc.options[ind].voters)
    doc.save((err) => {
     if (!err) {
      res.send("done");
     }
    })
    
    }  else {
      console.log("New option", req.query.optName)
     let ind = null;
     ind = doc.options.findIndex((el) => {
      console.log(el);
     if (el.name == req.query.optName) {
      return true
     }
     }) 
     console.log(ind);
     if (ind == -1) {
     doc.options.push({name: req.query.optName, votes: 1})
     doc.options[doc.options.length - 1].voters.push(user["_id"])
     doc.save((err) => {
     if (!err) {
      res.send("done");
     }
    })
    }
    }
     
   } 
     
    }) 
    
     }
    })(req, res, next)
  }
}
) 

app.get("/api/pollsList", (req, res, next) => {
  
   var PollModel = require("./mongo/PollModel");
   PollModel.find({}, (err, polls) => {
    if (!err) {
    res.json(polls);
    }
   }
)
})


app.get("/api/deletePoll", function(req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
    if (info) {
     res.status(401).send(info.message) 
     } else {
      
      console.log("Deleting poll")
      var PollModel = require("./mongo/PollModel");
      PollModel.findById(req.query.pollId, (err, poll) => {
       if (!err) { 
       console.log(poll);
       poll.remove().then(() => {
       res.send("done")
       })
       }
      })
     }
 
}
)(req, res, next)}
)


