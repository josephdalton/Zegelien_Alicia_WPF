//Alicia Zegelien 10-9-13 Expressions_Industry
var mic = prompt("Number of mics");
var AA = prompt ("Number of batteries in mic");
var micBatteriesToChange = mic * AA;
//console.log(micBatteriesToChange);
alert("Number of Batteries to Change per service: "+ micBatteriesToChange);

var services = prompt("Number of Services per week");
var batteriesPerYear = services * micBatteriesToChange * 52;
//console.log(batteriesPerWeek);
alert("Number of Batteries used per year: " + batteriesPerYear);


