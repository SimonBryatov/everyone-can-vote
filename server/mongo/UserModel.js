const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    socialProvider: String,
    socialID: Number,
    //lastVoteAt: Number,
    //pollsAdded: Number,
    
    //votes: [{pollId: Number, optId: Number}]
})

module.exports = mongoose.model("user", userSchema);