/*

JavaScript file for HW5 - Part 3
Written by Brianna Cottrill  10/27/2018

*/

$(document).ready(function(){
	$("#stateForm").validate({
		rules: {
			stateSearch: {required: true}
		}
	});
});

function stateProcess(){
	
	if ($("#stateForm").valid()){
	//Create 2D array of state information
	var stateInfo = [
	    ["AL", "Alabama", "Montgomery", 4779736],
		["AK", "Alaska", "Juneau", 710231],
		["AZ", "Arizona", "Phoenix", 6392017],
		["AR", "Arkansas", "Little Rock", 2915918],
		["CA", "California", "Sacramento", 372539656],
		["CO", "Colorado", "Denver", 5029196]
	];
	
	var userInput = document.getElementById("stateSearch").value;	
	var x = "not found";
	
	for(var i = 0; i < stateInfo.length; i++){
		for(var j = 0; j < 2; j++){
			if (userInput.toUpperCase() == stateInfo[i][j].toUpperCase()){
				x = stateInfo[i];
			}
		}
	}
	
	var htmlOutput = "";
	
	if (x == "not found"){
		htmlOutput += "Sorry, either you:<br>"
        htmlOutput += "a) misspelled the state or state abbreviation, or <br>";
		htmlOutput += "b) entered the name of a state not on our list <br>";
		htmlOutput += "Please try again.";
	}
	else {
		var stateAbbr = x[0];
		var stateName = x[1];
		var stateCapital = x[2];
		var statePop = x[3];
		
		htmlOutput += "Thanks for your inquiry, here is the information you requested: <br>";
		htmlOutput += "State abbr = " + stateAbbr + "<br>";
		htmlOutput += "State Name = " + stateName + "<br>";
		htmlOutput += "Capital = " + stateCapital + "<br>";
		htmlOutput += "Population = " + statePop + "<br>";
	}
	
	document.getElementById("resultsDiv").innerHTML = htmlOutput;
	
	}
}