const mongoose = require("mongoose");
require("dotenv").config();
const MongoURLServer =process.env.MongoURLServer ;

//defined the url
// const MongoURLLocal = "mongodb://localhost:27017/hotel"; //this one local url 
  const MongoURLServer ="mongodb+srv://dipuchetia240:IvRsd4rLrBHPSXqb@cluster0.ygfoftq.mongodb.net/"
mongoose.connect(MongoURLServer, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db =mongoose.connection;

db.on("connected",()=>{
    console.log("db is connected")
})
db.on("error",(error)=>{
    console.log(`db is getting ${error}`)
})

db.on("disconnected",()=>{
    console.log("db is Disconnected")
})

module.exports =db

