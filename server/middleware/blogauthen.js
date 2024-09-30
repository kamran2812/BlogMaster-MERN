// const jwt = require("jsonwebtoken");
// const Blog = require("../Model/blogschema")
// const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwtoken;
//         if (!token) {
//             return res.status(401).send("Unauthorized: No token provided");
//         }

//         const decoded = jwt.verify(token, process.env.SECRET);
//         const user = await Blog.findOne({ _id: decoded._id, "tokens.token": token });
//         if (!user) {
//             throw new error("User not found");
//         }

//         req.user = user;
//         req.token = token;
//         next();
//     } catch (error) {
//         res.status(401).send("Unauthorized: Invalid token");
//         console.log(error);
//     }
// };
// module.exports = verifyToken;