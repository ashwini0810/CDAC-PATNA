var express = require("express")
var app = express()

app.get("/",function(req,res){
    res.send("Hi from express server")
})

app.listen(8000,function(){
    console.log("Server is running at 8000")
})