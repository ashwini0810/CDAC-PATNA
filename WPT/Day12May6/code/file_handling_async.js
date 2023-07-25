var fs = require("fs")

console.log("Hi1")
// fs.readFile("demo.txt",function(err,data){
// 	console.log(data.toString())
// })
var str = "This is new data"
fs.writeFile("demo.txt", str, function(err,data){
	console.log("Writing done")
})

console.log("Hi3")


/*
	readFile(filename,function(err, data){})
	writeFile(filename,data,function(err,data){})
	appendFile(filename,data,function(err,data){})
*/
