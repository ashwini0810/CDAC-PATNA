var fs = require("fs")

console.log("hi1")

fs.readFile("demo.txt",function(err,data){

	fs.writeFile("demo1.txt",data.toString(),function(err,data){
		console.log("Writing done")
	})
	
})


console.log("hi3")