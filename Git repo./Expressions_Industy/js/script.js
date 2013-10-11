//Alicia Zegelien 10-9-13 Expressions_Industry
var mic = prompt("Number of mics");
var AA = prompt ("Number of batteries in mic");
var micBatteriesToChange = mic * AA;
//console.log(micBatteriesToChange);
alert("Number of Batteries to Change per service: "+ micBatteriesToChange);

var services = prompt("Number of Services per week");
var batteriesPerWeek = services * micBatteriesToChange;
//console.log(batteriesPerWeek);
alert("Number of Batteries used per week: " + batteriesPerWeek);

var weeks = ("Number of week in a year");
var batteriesPerYear = weeks * batteriesPerWeek;
console.log(batteriesPerYear);
