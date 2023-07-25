const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

var tasks = [];

app.use(morgan("dev"))
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/tasks", function(req,res){
	res.send(tasks)
})

function generateId(){
	do{
		var rand = Math.floor(Math.random()*1000)
		var checkTaskId = tasks.find(item => item.id == rand)
	}while(checkTaskId)
	return rand
}

app.post("/task", function(req,res){
	var taskData = req.body
	taskData.id = generateId()
	tasks.push(taskData)
	res.send({type: "success", msg :"Task saved"})
})

app.delete("/task",function(req,res){
	var taskData = req.body
	tasks = tasks.filter(item => item.id != taskData.id)
	res.send({type: "success", msg: "Task deleted"})
})

app.listen(8000, ()=>{
	console.log("Server is running at 8000")
})