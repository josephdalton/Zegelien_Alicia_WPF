// Alicia Zegelien 10/16/2013 Conditionals_worksheet
var enteredUsername = prompt("What is your username?");
var enteredPassword = prompt("What is your password?");
var username = "aliciazegelien"
var password = "maddie16"

if(username === enteredUsername && password === enteredPassword){
	console.log("Welcome, aliciazegelien!")
}else if(username != enteredUsername){
	console.log("User not found. Try again.");
}else{
	console.log("Password does not match our records.");
}


