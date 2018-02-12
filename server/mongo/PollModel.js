const mongoose = require("mongoose");

var pollSchema = new mongoose.Schema({
    name: String,
    options: [{name: String, votes: Number, voters: [String]}],
    creatorID: String,

})

module.exports = mongoose.model("Poll", pollSchema);