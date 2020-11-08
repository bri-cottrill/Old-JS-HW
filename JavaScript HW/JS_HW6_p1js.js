/*
JS Script for HW6 - Part 1
Written by Brianna Cottrill 11/10/18
This script validates and gets user input, a floating-point number, and returns the number rounded to different decimal places and its square root.
*/

$(document).ready(function(){
	jQuery.validator.addMethod("minDecimals", function(value, element){
		return this.optional(element)|| /^\d+\.\d{4,}$/.test(value);
	}, "You must include at least four decimal places");
	
	$("#inputForm").validate({
		rules: {
			numInput: {
				required: true,
			    number: true,
				minDecimals: true
			}
		}
	});
});

function processNumber(){
	if($("#inputForm").valid()){
		var userNum = document.getElementById("numInput").value;
	    userNum = parseFloat(userNum);
	
	    var intNum = parseInt(userNum);  
	
	    var rootNum = Math.sqrt(userNum);
	    rootNum = parseInt(rootNum);
	
	    var tensNum = Math.floor(userNum * 10 + .5)/10;
	    var hundNum = Math.floor(userNum * 100 + .5)/100;
	    var thouNum = Math.floor(userNum * 1000 + .5)/1000;
	    tensNum = tensNum.toFixed(2);
	    hundNum = hundNum.toFixed(3);
	    thouNum = thouNum.toFixed(4);
	
	    var htmlOutput = "";
	    htmlOutput += "Original Number: " + userNum + "\n";
	    htmlOutput += "To Integer: " + intNum + "\n";
	    htmlOutput += "Square Root: " + rootNum + "\n";
	    htmlOutput += "To tenths position: " + tensNum + "\n";
	    htmlOutput += "To hundreds position: " + hundNum + "\n";
	    htmlOutput += "To thousands position: " + thouNum;
	
	    document.getElementById("resultsArea").innerHTML = htmlOutput;

	}
}

function clearPage(){
	document.getElementById("resultsArea").innerHTML = "";
}