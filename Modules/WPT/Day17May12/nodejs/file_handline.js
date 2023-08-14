var fs = require("fs/promises")

fs.readFile("demo.txt")
	.then(data => console.log(data.toString()))
	.catch(err => console.log(err))

var str = "New data"
fs.writeFile("demo1.txt", str)