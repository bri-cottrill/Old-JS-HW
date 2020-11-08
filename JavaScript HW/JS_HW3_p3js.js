/*
JavaScript file for HW3 - Part 3
Converts temperatures between Fahrenheit and Celsius.
*/

function toCelsius(){
	var temp;
	var htmlOutput;
	temp = document.getElementById("tempInput").value;
	temp = parseFloat(temp);
	
	if (isNaN(temp)){
		htmlOutput = "Please input a numeric value";
	}
	else {
	    htmlOutput = 5/9 * (temp - 32);
		htmlOutput = htmlOutput.toFixed(1);
		htmlOutput += "C";
	}
	
	document.getElementById("resultsDiv").innerHTML = htmlOutput;
}

function toFahrenheit(){
	var temp;
	var htmlOutput;
	temp = document.getElementById("tempInput").value;
	temp = parseFloat(temp);
	
	if(isNaN(temp)){
		htmlOutput = "Please input a numeric value";
	}
	else {
	    htmlOutput = (9/5 * temp) + 32;
		htmlOutput = htmlOutput.toFixed(1);
		htmlOutput += "F";
	}
	
	document.getElementById("resultsDiv").innerHTML = htmlOutput;
}