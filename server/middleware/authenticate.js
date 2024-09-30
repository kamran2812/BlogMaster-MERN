const jwt = require("jsonwebtoken")
const User = require("../Model/userSchema")

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET)
    const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
    if (!rootUser) { throw new error("User not found") }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized: Invalid token");
    console.log(error)
  }
}

module.exports = authenticate;
