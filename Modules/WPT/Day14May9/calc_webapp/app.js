var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static("public")) // serve the static files from public folder
app.use(bodyParser.urlencoded({extended: true}))
//For GET type access using req.query
//For POST type access using req.body

app.get("/",(req,res)=>{
	res.send("This is / path")
})

app.get("/calc",function(req,res){
	var data = req.query
	var result = Number(data.num1) + Number(data.num2)
	res.send("Result is "+ result)
})

app.post("/calculate", function(req,res){
	var data = req.body
	if(data.opr == "add"){
		var result = Number(data.num1) + Number(data.num2)
		res.send("Result is "+ result)		
	}else if(data.opr == "sub"){
		var result = Number(data.num1) - Number(data.num2)
		res.send("Result is "+ result)
	}else{
		res.send("Wrong option")
	}
})

app.post("/reg",function(req,res){
	var data = req.body
	console.log(data)
	res.send("Got data")
})


app.listen(8000,()=>{
	console.log("Server running at 8000")
})