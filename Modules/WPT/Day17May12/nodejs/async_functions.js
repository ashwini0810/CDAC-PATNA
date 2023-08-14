//async keywords makes the function asynchrnous
//async function returns promise
// async function sum(a,b){
// 	var result = a + b
// 	return result
// }

// var sum = async function(a,b){
// 	var result = a + b
// 	return result
// }
var sum = async (a,b) => {
	var result = a + b
	return result
}
console.log("Hi1")
sum(10,20).then(data => console.log(data)).catch(err => console.log(err))
//promise
console.log("hi2")