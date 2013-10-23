console.log("========== Loops =========")

var b = 10; //setups the index

while(b > 0){ //checks the condition
	console.log(b + " kegs on the wall");
	b--; //increments or decrements the index
}

console.log("========= Do While Loops =========");
var c = 10;
do{
	console.log(c + " kegs on the wall"); // this first
	c--;
}
while(c > 0); // this second



console.log("============= For Loops ==========");


for(var I = 10; I > 0; I--){                 // shorthand version. this is while and do while
	console.log(I + " kegs on the wall");
}