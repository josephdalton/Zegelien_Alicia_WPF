//Alicia Zegelien 10/24/2013 Function_Industry
var music = function(mics, instruments){
	var totalOfOutputs = mics * instruments;
	return totalOfOutputs;
}

var outputs = music(7,4);
console.log("You will need " + outputs + " outputs to run the mics and insturments" );