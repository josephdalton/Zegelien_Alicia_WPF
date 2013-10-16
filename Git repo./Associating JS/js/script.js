//Conditdional logic - else if

var kidHeight = 50;
var minHeight = 48;
var wParentHeight =45;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches is height
if(kidHeight > minHeight){
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	console.log("You can ride, but only with a parent present!");
}else{
	console.log("Sorry kid grow some first!");
}
