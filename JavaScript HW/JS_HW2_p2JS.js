/*
JS_HW2_p2JS.js
JavaScript file for HW2 - Part 2

Gets and processes the 3 integers, then sends results
back to the HTML page.
*/

function process(){
	var number1, number2, number3, n1, n2, n3;
	var sum, avg, prod, smallest, largest;
	var htmloutput = "";
	
	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	
	sum = n1 + n2 + n3;
	avg = sum / 3;
	prod = n1 * n2 * n3;
	smallest = Math.min(n1, n2, n3);
	largest = Math.max(n1, n2, n3);
	
	htmloutput += "<table>";
	htmloutput += "<tr><td>SUM: </td><td>" + sum + "</td></tr>";
	htmloutput += "<tr><td>AVERAGE: </td><td>" + avg + "</td></tr>";
	htmloutput += "<tr><td>PRODUCT: </td><td>" + prod + "</td></tr>";
	htmloutput += "<tr><td>SMALLEST: </td><td>" + smallest + "</td></tr>";
	htmloutput += "<tr><td>LARGEST: </td><td>" + largest + "</td></tr>";
	htmloutput += "</table>";
	
	document.getElementById("resultsTable").innerHTML = htmloutput;
}