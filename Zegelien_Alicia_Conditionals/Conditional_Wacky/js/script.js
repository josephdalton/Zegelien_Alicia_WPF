//Alicia Zegelien 10/17/2013 conditional_wacky
//guess the secret code word
var secretCodeWord = tootles
var enteredSecretCode = prompt("What is the secret code word?");
if(enteredSecretCode === secretCodeWord){
	console.log("Congratulations you know the secret code word!!!");
}else{
	console.log("Please try again!")
}

