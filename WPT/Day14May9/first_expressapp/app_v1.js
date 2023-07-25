var express = require("express")
var app = express()

app.get("/",function(req,res){
	res.send("This is / path")
})

app.get("/data",function(req,res){
	res.send("THis is /data")
})

app.get("/xyz",function(req,res){
	res.send("This is /xyz")
})

app.listen(8000,()=>{
	console.log("Server running at 8000")
})