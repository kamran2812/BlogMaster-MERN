const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const blogSchema = new mongoose.Schema({
    useremail:{
type:String
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    auther: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens :[
        {
            token :{

            }
        }
    ],
});

blogSchema.methods.generateAuthtoken = async function() {
    const token2 = jwt.sign({ _id: this._id }, process.env.SECRET, { expiresIn: '100y' });
    this.tokens = this.tokens.concat({ token: token2 });
    await this.save();
    return token2;
  };
  

const Blog = mongoose.model("POST", blogSchema);

module.exports = Blog;
