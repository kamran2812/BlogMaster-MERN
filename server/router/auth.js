
const express = require("express");
const app= express()
const jwt = require("jsonwebtoken");
const router = express.Router();
const mongoose = require("mongoose")
const User = require("../Model/userSchema")
const Blog = require("../Model/blogschema")
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")
const multer =  require('multer');
const path =  require('path');
const fs = require('fs');
// const staticpath = path.join(__dirname,  "../public")
const dirname = path.resolve();
// router.use("../public/uploads", express.static(path.join(__dirname, "../public/uploads")));
  

// const verifyToken = require("../middleware/blogauthen")
// const checkPostOwnership = require("../middleware/blogauthen")
const cookieParser = require("cookie-parser");
// const emailVerify = require('email-verify');
// const nodemailer = require('nodemailer');
// const emailVerificationAPI = require('library-for-email-verification-api');

router.use(cookieParser());
router.get("/", (req, res)=>{
res.send("this is home page bruh")
})


// router.post("/register", (req, res)=>{
// const {name,email,phone,work,password,cpassword}= req.body;
// if(!name || !email || !phone || !work || !password || !cpassword ){
//     return res.status(422).json({error:"Something missing please fill the fields correctly"})
// }

// User.findOne({email:email},{ maxTimeMS: 10000 })
// .then((userExist)=>{
// if(userExist){
//     res.status(422).json({error:"User Already exist"})
// }
// const user = new User({name,email,phone,work,password,cpassword})
// user.save()
// .then(()=>{
//     res.status(201).json({message:"User registered successfully"})
// })
// .catch((err)=>res.status(500).json({err:"failed to registed"}))
// })
// .catch(err=>{console.log(err)})


// })


router.post("/register", async (req, res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
   
    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error:"Something missing please fill the fields correctly"})
    }

    try {
        
        const userExist = await User.findOne({email:email})

        if(userExist){
            res.status(422).json({error:"User Already exist"})
        }else{

            const user = new User({name,email,phone,work,password,cpassword})
            await user.save();
            
            res.status(201).json({message:"User registered successfully"})
            
        }
        } catch (error) {
            console.log(error)
        }
});











router.post(("/login"), async (req, res)=>{
    try {
        const { email, password } = req.body;
      
    if(!email || !password){
        return res.status(400).json({message:"Invalid details"})
    }
        const useremail = await User.findOne({email:email})
        const isMatch  = await bcrypt.compare(password, useremail.password)
      
        const token = await useremail.genrateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token,{
            expires:new Date(Date.now()+ 25892000000),
            httpOnly: true
        })
    
        if(isMatch){
        res.status(200).json({message:"User signin successfully"})
        }
        else{
            res.status(400).send("Password Invalid")
        }
    } catch (err) {
        res.status(400).send("Invalid Email")
    }
    
    })

    router.get("/about",authenticate,(req,res)=>{
        res.send(req.rootUser)
    })
  
    
    router.get("/getdata",authenticate,(req,res)=>{
        res.send(req.rootUser)
    })
    router.post("/contact", authenticate, async (req,res)=>{
       try {
        const{name, email, phone, message} = req.body;

        if(name && email && phone && message){
            
            const userContact = await User.findOne({_id:req.userID});
            if(userContact){
                const userMessage = await userContact.addMessage(name,email,phone,message)
                await userContact.save()
    
                res.status(201).json({message:"user contact Successfull"})
            }

        }else{
            console.log("fill the fieled")
            return res.status(422).json({error:"Something missing please fill the fields correctly"})
        }
       
       } catch (error) {
        console.log(error)
       }
    })
    // router.post("/contact", authenticate, async (req, res) => {
    //     try {
    //       const { name, email, phone, message } = req.body;
      
    //       if (name && email && phone && message) {
    //         const userContact = await User.findOne({ _id: req.userID });
    //         if (userContact) {
    //           const userMessage = await userContact.addMessage(name, email, phone, message);
    //           await userContact.save();
      
    //           let transporter = nodemailer.createTransport({
    //             host: "smtp.gmail.com",
    //             port: 587,
    //             secure: false,
    //             requireTLS: true,
    //             auth: {
    //               user: "kamranbusiness369@gmail.com",
    //               pass: "Socrates@369"
    //             }
    //           });
      
    //           let mailOptions = {
    //             from: email,
    //             to: "kamranbusiness369@gmail.com",
    //             subject: "New Contact Information",
    //             text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    //           };
      
    //           transporter.sendMail(mailOptions, (error, info) => {
    //             if (error) {
    //               return console.log(error);
    //             }
    //             console.log("Message sent: %s", info.messageId);
    //           });
      
    //           res.status(201).json({ message: "User contact successful" });
    //         }
    //       } else {
    //         console.log("Fill the fields");
    //         return res.status(422).json({ error: "Please fill all the fields correctly" });
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   });
      
   

    router.use("/public/uploads", express.static(path.join(__dirname, "../public/uploads")));
router.get("/home", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  
    // router.delete("/home/:id",  async (req, res) => {
    //     try {
    //       const _id = req.params.id;
    //       const deletedPost = await Blog.findByIdAndDelete(_id);
      
    //       res.send(deletedPost);
    //     } catch (error) {
    //       res.status(500).send(error);
    //     }
    //   });
    


router.delete("/blogpost/:id",  async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedPost = await Blog.findByIdAndDelete(_id);

    // Delete the image from the file system
    fs.unlink(deletedPost.image, (err) => {
      if (err) throw err;
    });

    res.send(deletedPost);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Verify Token Middleware

  
// const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.cookies[`jwtoken2-${req.params.id}`];
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

// router.delete("/blogpost/:id", verifyToken, async (req, res) => {
//     try {
//         const post = await Blog.findById(req.params.id);
//         console.log(req.token)
//         console.log(post.tokens[0].token)
//         if (!post) return res.status(404).json({ message: "Post not found" });
//         if (post.tokens[0].token !== req.cookies[`jwtoken2-${req.params.id}`]) {
//             return res.status(401).json({ message: "Unauthorized: Tokens do not match" });
//         }
        

//         await post.remove();
//         res.status(200).json({ message: "Post removed" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });



  
      router.get("/home/:id",  async (req, res) => {
        try {
          const _id = req.params.id;
          const getPost = await Blog.findById(_id);
          res.send(getPost);
        } catch (error) {
          res.status(500).send({ error: error.message });
        }
      });
      
    // router.get(("/blogedit/:id"), async (req,res)=>{
    //     try {
    //      const _id = req.params.id;
    //     const getMens = await Blog.findOneById(_id)
     
    //          res.send(getMens)
    //  } catch (error) {
    //      res.status(500).send(error)
    //  }
    //  })
   
     router.patch(("/home/:id"), async (req,res)=>{
    try {
     const _id = req.params.id;
    const getMens = await Blog.findByIdAndUpdate(_id, req.body,{
     new:true
    })
 
         res.send(getMens)
 } catch (error) {
 	res.status(500).send(error)
 }
 })

 router.get("/blogedit/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const post = await Blog.findById(_id);
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
    router.get("/logout",(req,res)=>{
        res.clearCookie("jwtoken",{oath:"/"})
        res.status(200).send("user logout")
    })


    let storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "public/uploads");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
    });
    
    let upload = multer({ storage: storage });
    
    // router.post("/blogpost", upload.single("image"), async (req, res) => {
    //     try {

    //       if (!req.file) {
    //         return res.status(400).json({ message: "Please upload an image" });
    //       }
      
    //       const requiredFields = ["category", "title", "description", "content", "auther"];
    //       for (const field of requiredFields) {
    //         if (!req.body[field]) {
    //           return res.status(400).json({ message: `${field} is required` });
    //         }
    //       }
    //       const useremail = await User.findOne({email:email})
    //     // Create a new Blog post
    //     const newBlog = new Blog({
    //         useremail:useremail,
    //       category: req.body.category,
    //       title: req.body.title,
    //       description: req.body.description,
    //       content: req.body.content,
    //       auther: req.body.auther,
    //       image: req.file.path,
    //       date: new Date(),
    //     });
          
    //     //   const token2 = await newBlog.generateAuthtoken();
    
    //     //   // Set the token in a cookie
    //     //   res.cookie(`jwtoken2-${newBlog._id}`, token2,{
    //     //     httpOnly: true
    //     // })
          
         
    //       await newBlog.save();
    //       const allBlogs = await Blog.find({}).sort({ date: -1 });
    //       res.status(201).json({ message: "Blog post created successfully", data: allBlogs });
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).json({ message: "Server error" });
    //     }
    //   });
      
    
    
    
      
    
  

      router.post("/blogpost", upload.single("image"), async (req, res) => {
        try {
    
            if (!req.file) {
                return res.status(400).json({ message: "Please upload an image" });
            }
    
            const requiredFields = ["category", "title", "description", "content", "auther"];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    return res.status(400).json({ message: `${field} is required` });
                }
            }
//             const {email }= req.body;
// const useremail = await User.findOne({email:email})

//             console.log(useremail.email)
            // if (!useremail) {
            //     return res.status(404).json({ message: "User not found" });
            // }
            // Create a new Blog post
            const newBlog = new Blog({
                // useremail: useremail.email,
                category: req.body.category,
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                auther: req.body.auther,
                image: req.file.path,
                date: new Date(),
            });
    
            //   const token2 = await newBlog.generateAuthtoken();
    
            //   // Set the token in a cookie
            //   res.cookie(`jwtoken2-${newBlog._id}`, token2,{
            //     httpOnly: true
            // })
    
    
            await newBlog.save();
            const allBlogs = await Blog.find({}).sort({ date: -1 });
            res.status(201).json({ message: "Blog post created successfully", data: allBlogs });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    });
    
      
      

      
      
      
module.exports = router;
