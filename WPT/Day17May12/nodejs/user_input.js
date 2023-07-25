const readline = require("readline/promises")

var inp = readline.createInterface({
	input : process.stdin,
	output : process.stdout
})

async function calculate(){
	var num1 = await inp.question("Enter number 1")
	var num2 = await inp.question("Enter number 2")
	var result = Number(num1) + Number(num2)
	console.log(result)
	inp.close()
}

calculate()