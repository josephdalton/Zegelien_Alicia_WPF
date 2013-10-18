//Alicia Zegelien 10/17/13 Conditional_Industrial
//ratios for 1 year old classrooms
var oneYearRatio = prompt("How many one year olds in your classroom?");

//if you have 6 or less kids you can be by yourself, if you have less than or equal to 12 you can have two people. otherwise, send to another room what you are over.
if(oneYearRatio <= 6){
	console.log("You can be in a room by yourself.");
}else if(oneYearRatio > 6 && oneYearRatio < 12){
	console.log("You can be in the room with two people.");
}