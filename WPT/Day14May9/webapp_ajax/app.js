var express = require("express")
var bodyParser = require("body-parser")
var app = express()

var users=[]

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true})) // convert urlencoded to object
app.use(bodyParser.json()) // convert json data to object

app.get("/",(req,res)=>{
	res.send("This is / path")
})

app.post("/calc",function(req,res){
	var data = req.body
	console.log(data)
	var result = Number(data.num1) + Number(data.num2)
	res.send(result.toString())
})

app.post("/reg",function(req,res){
	var data = req.body
	console.log(data)
	users.push(data)
	res.send("Got data")
})

app.post("/data",function(req,res){
	res.send(users)
})

app.listen(8000, ()=>{
	console.log("Server running at 8000")
})