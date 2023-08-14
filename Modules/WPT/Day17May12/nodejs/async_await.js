async function sum(a,b){
	var result = a + b
	return result
}


// async function getData(){
// 	console.log("Hi1")
// 	var res = await sum(10,20) // 	
// 	console.log(res)
// 	console.log("Hi2")
// }

async function getData(){
	console.log("Hi1")
	sum(10,20)
		.then(data => console.log(data))
		.catch(err => console.log(err))
	
	console.log("Hi2")
}


getData()
