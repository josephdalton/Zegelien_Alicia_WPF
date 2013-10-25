//Alicia Zegelien 10/24/2013 Functions_Personal

var gross = monthlyWage(8,40,4);
function monthlyWage(pay, hours, weeks){
	var total = pay * hours * weeks;
	return total;
}