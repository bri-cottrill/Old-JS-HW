/*
JS_HW2_p3JS.js
JavaScript file for HW2 - Part 3

Gets and processes the 5 integers, then sends results
back to the HTML page.  Also included is a jQuery event handler
to make the results fade when the user clicks a button.
*/

function process(){
	var number1, number2, number3, number4, number5;
	var n1, n2, n3, n4, n5;
	var negNums = 0;
	var posNums = 0;
	var numZeroes = 0;
	var htmloutput = "";
	
    number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	number4 = document.getElementById("num4").value;
	number5 = document.getElementById("num5").value;
	
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	n4 = parseInt(number4);
	n5 = parseInt(number5);
	
	var numArray = [n1, n2, n3, n4, n5];
	var i;
	for (i = 0; i < numArray.length; i++){
		if(numArray[i] < 0){
			negNums++;
		}
		else if(numArray[i] == 0){
			numZeroes++;
		}
		else if(numArray[i] > 0){
			posNums++;
		}
	}
	
	htmloutput += "<table>";
	htmloutput += "<tr><td>Negative Numbers Count: </td><td>" + negNums + "</td></tr>";
	htmloutput += "<tr><td>Zero Numbers Count: </td><td>" + numZeroes + "</td></tr>";
	htmloutput += "<tr><td>Positive Numbers Count: </td><td>" + posNums + "</td></tr>";
	htmloutput += "</table><br>";
	document.getElementById("resultsTable").innerHTML = htmloutput;
	
}

$(document).ready(function(){
	$("#fadebutton").click(function(){
		$("#resultsTable").fadeTo("slow", 0.5);
	});	
});