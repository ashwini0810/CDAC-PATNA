var fs = require("fs")

// for(var i = 1; i < 11; i++){
// 	var res = (2*i) + "\n"
// 	fs.appendFile("demo1.txt", res, function(err, data){
// 		console.log("Writing done")
// 	})
// }

var i = 0

function writeTable(){
	var res = (2*i) + "\n"
	fs.appendFile("demo1.txt", res, function(err, data){
		i++;
		if(i < 11){
			writeTable()	
		}
	})
}

writeTable()