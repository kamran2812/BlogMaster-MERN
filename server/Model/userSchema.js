const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(value) {
        //         return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        //     },
        //     message: "Invalid email format"
        // }
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
   
    tokens :[
        {
            token :{

            }
        }
    ],
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email: {
                type: String,
                required: true,
                // validate: {
                //     validator: function(value) {
                //         return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
                //     },
                //     message: "Invalid email format"
                // }
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            }, 
        }
    ],
})


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
        this.cpassword = await bcrypt.hash(this.password,10)
    }
    
    next();
})
userSchema.methods.genrateAuthToken = async function(){
    try {
	const tokengen = jwt.sign({_id: this._id},process.env.SECRET)
	    this.tokens = this.tokens.concat({token:tokengen})
	    await this.save();
	    return tokengen
} catch (error) {
	console.log(error);
}
}


userSchema.methods.addMessage = async function(name,email,phone,message){
    try {
        this.messages= this.messages.concat({name,email,phone,message})
        await this.save()
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}
const User = mongoose.model("USER", userSchema);

module.exports = User;