var path = require("path")
const token = require(path.resolve("./server/jwt/token"))

module.exports.generateUserToken = (req, res) => {
  console.log(req.user);
  const accessToken = token.generateAccessToken(req.user.id);
  console.log(accessToken)
  res.redirect("/?token=" + accessToken + "&userName=" + req.user.name.givenName);
}
