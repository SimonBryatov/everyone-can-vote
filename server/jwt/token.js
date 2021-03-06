
const jwt = require('jsonwebtoken');
const path = require("path")
//const config = require(path.resolve('./config/config'));


function generateAccessToken(userId) {
  const expiresIn = '14d';
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    subject: userId.toString()
  });

  return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
}