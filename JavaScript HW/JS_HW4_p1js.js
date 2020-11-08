$(function(){
	$("#draggableFlower").draggable();
});

function process(){
	
	//For loop: multiplication
	var result1 = 1;
	for(var num = 5; num <= 20; num += 3){
		result1 *= num;
	}
	
	//For loop: addition
	var result2 = 0;
	for(var num = 5; num <= 20; num += 3){
		result2 += num;
	}
	
	//While loop: multiplication
	var result3 = 1;
	var num1 = 3;
	while(num1 <= 31){
		result3 *= num1;
		num1 += 4;
	}
	
	//While loop: addition
	var result4 = 0;
	var num2 = 3;
	while(num2 <= 31){
		result4 += num2;
		num2 += 4;
	}
	
	//Return results to html page
	htmlOutput = "";
	htmlOutput += "<h1>Loops</h1><h2>Part 1a</h2>";
	htmlOutput += "For Loop Multiplication Result: ";
	htmlOutput += result1;
	htmlOutput += "<br>";
	
	htmlOutput += "For Loop Addition Result: ";
	htmlOutput += result2;
	htmlOutput += "<br>";
	
	htmlOutput += "<h2>Part 1b</h2>";
	htmlOutput += "While Loop Multiplication Result: ";
	htmlOutput += result3;
	htmlOutput += "<br>";
	
	htmlOutput += "While Loop Addition Result: ";
	htmlOutput += result4;
	htmlOutput += "<br><br>";
	
	htmlOutput += "<em>Now, try dragging around the flower</em>";
	
	document.getElementById("bodyDiv").innerHTML = htmlOutput;
}