/*
JS Script for HW6 - Part 3
Written by Brianna Cottrill 11/10/2018
Script does 2 things:
  1 - Outputs the current date and time in PST, EST, and UTC along with the difference in hours between the times.
  
  2 - Gets user input, a phone number, and displays the number with the area code in a separate field.
*/

$('input[name="teleInput"]').mask('(000) 000-0000');

function displayDateTimes(){
	var today = new Date();
	var eastDiff = today.getTimezoneOffset()/60 - 5;
	
	htmlOutput = "";
	htmlOutput += "Current Time: " + today.toString() + "<br>";
	htmlOutput += "Local Time: " + today.toLocaleString() + "<br>";
	htmlOutput += "Universal Coordinated Time: " + today.toUTCString() + "<br>";	
	htmlOutput += "The difference between UTC and Local Time is: " + today.getTimezoneOffset()/60 + " hours<br>";
	htmlOutput += "The difference between UTC and Eastern Standard Time is: " + eastDiff + " hours";	
	
	document.getElementById("timeDiv").innerHTML = htmlOutput;
	
}

function splitTelephone(){
	if($("#teleForm").valid()){
		var userPhone = document.getElementById("teleInput").value;
	    var phoneSplit = userPhone.split(/[-\s\(\)]+/);
	
	    phoneOutput = "";
	    phoneOutput += "Area Code : " + phoneSplit[1] + "<br>";
	    phoneOutput += "Phone number: " + phoneSplit[2] + " " + phoneSplit[3];
	    document.getElementById("phoneDiv").innerHTML = phoneOutput;
	}
}

function clearPage(){
	document.getElementById("phoneDiv").innerHTML = "";
}