const mongoose = require("mongoose");
const dotenv = require("dotenv")
const mongodeb = process.env.DATABASE;
mongoose.set('strictQuery', true);
const mongocon = async()=>{

    try {
	await mongoose.connect(mongodeb,{ useNewUrlParser: true,
		useUnifiedTopology: true,
		bufferCommands: false}, ()=>{
	        
	        console.log("connection successfull...")
	    })
       
} catch (error) {
	console.log(err);
       
}
}

module.exports = mongocon;
// const mongoose = require("mongoose");
// const dotenv = require("dotenv")
// const mongodeb = process.env.DATABASE;
// mongoose.set('strictQuery', true);
// mongoose.connect(mongodeb)
// .then(()=>{
//     console.log("connection successfull...")
// })
// .catch(err => console.log(err));