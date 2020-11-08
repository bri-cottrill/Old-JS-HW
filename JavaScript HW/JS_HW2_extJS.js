/*
JS_HW2_extJS.js
JavaScript file for HW2 - Extra Credit

Gets user-entered US Dollars, calculates the value in various
currencies based on the exchange rates as of 08/29/2018.  The calculated values
are then sent back to the user.

Included are jQuery event handlers for when the user mousesover or clicks the 
currency table and for when the user clicks the "Enter US Dollars" box.
*/


$(document).ready(function(){
	$("#clickSH").click(function(){
		$("#instructionsDiv").slideToggle("slow");
	});
	$("#us").focus(function(){
		$(this).css("background-color","#99d7f2");
	});
});	

document.getElementById("calc").onclick=function(){process();};

function process(){
	var usd, pound, can, euro, yen, peso;
	
	usd = document.getElementById("us").value;
	usd = parseFloat(usd);
	pound = .77 * usd;
	pound = pound.toFixed(2);
	can = 1.29 * usd;
	can = can.toFixed(2);
	euro = .85 * usd;
	euro = euro.toFixed(2);
	yen = 111.63 * usd;
	yen = yen.toFixed(2);
	peso = 18.97 * usd;
	peso = peso.toFixed(2);
	
	document.getElementById("pound").innerHTML = pound;
	document.getElementById("can").innerHTML = can;
	document.getElementById("euro").innerHTML = euro;
	document.getElementById("yen").innerHTML = yen;
	document.getElementById("peso").innerHTML = peso;
}
