const passport = require('passport');
const passportJwt = require('passport-jwt');
//const config = require('../../config/config');
const UserModel = require('../mongo/UserModel');


var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies.userToken)
    {
        token = req.cookies.userToken;
    } 
    return token;
};

const jwtOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
  
  if (payload.iat > payload.exp) {
    return done(null, false)
  }
  UserModel.findOne({socialID: payload.sub}, function(err, user) {
        if (err) {
            console.log("JWT: Error on authorization: User Not Found")
            return done(err, false);
        }
        if (user) {
            console.log("JWT: Token accepted")
            return done(null, user);
        } else {
            console.log("JWT: Token not accepted")
            return done(null, false);
          
        }
    });
}));