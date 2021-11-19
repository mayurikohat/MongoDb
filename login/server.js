const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
//connection to mongodb
mongoose.connect("mongodb+srv://shubham:shubham123@servicesearch.iugoy.mongodb.net/servicesearch",{useNewUrlParser: true},{useUnifiedTopology: true});

//create a data schema 
const loginSchema = {
    username: String,
    password: String

}
const log = mongoose.model("log", loginSchema);

app.get("/", function(req,res){
    res.sendFile(__dirname + "/login.html");
})


app.post("/", function(req, res){
    let newlog = new log({
        username: req.body.username,
        password: req.body.password
    });
    newlog.save();
    res.redirect('/');
})

app.listen (3000, function() {

console.log("server is running on 3000");

})