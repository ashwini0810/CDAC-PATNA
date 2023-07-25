const fs = require("fs/promises")

fs.readFile("demo.txt")
	.then(data => {
		fs.writeFile("demo1.txt1", data.toString())
	})
	.catch(err => console.log(err))