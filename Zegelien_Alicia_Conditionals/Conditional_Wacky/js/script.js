//Alicia Zegelien 10/17/2013 conditional_wacky
//guess the secret code word
var secretCodeWord = 'tootles'; //Missing quotes and semicolon.
var enteredSecretCode = prompt("What is the secret code word?");
if(enteredSecretCode === secretCodeWord){        //if statement
	console.log("Congratulations you know the secret code word!!!");
}else{     //else statement
	console.log("Please try again!")
}

