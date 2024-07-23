const mongoose = require("mongoose");

//defined the url
const MongoURL = "mongodb://localhost:27017/hotel";
mongoose.connect(MongoURL, {
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

