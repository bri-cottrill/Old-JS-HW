/*
JavaScript file for HW3 Part 4

Generates a randomized multiplication question, sends it to the HTML page,
and checks to see if the answer is correct or not.
*/

var product;

function generateQuestion(){
	var num1 = Math.floor((Math.random() * 9) + 1);
	var num2 = Math.floor((Math.random() * 9) + 1);
	var htmlOutput;
	
	product = num1 * num2;
	
	htmlOutput = "What is the product of <br><h3>";
	htmlOutput += num1;
	htmlOutput += "</h3><br> AND <br><h3>";
	htmlOutput += num2;
	htmlOutput += "</h3>";
	
	document.getElementById("questionDiv").innerHTML = htmlOutput;
}

function checkAnswer(){
	var htmlOutput;
	var answer = document.getElementById("answerInput").value;
	answer = Number(answer);
	
	if (Number.isInteger(answer)){
		if (answer == product){
			document.getElementById("inputForm").reset();
			htmlOutput = "You are correct!<br>";
			htmlOutput += "Would you like to try a new problem?<br>";
			htmlOutput += "<input type='reset' value='YES' onclick='resetPage(); generateQuestion();'>";
			htmlOutput += "<input type='button' value='NO' onclick='goodbye();'>";
		}
		else{
			htmlOutput = "Sorry, that answer is not correct. Please try again.";
			document.getElementById("inputForm").reset();
		}
	}
	
	document.getElementById("resultsDiv").innerHTML = htmlOutput;	
}

function resetPage(){
	document.getElementById("resultsDiv").innerHTML = "";
}

function goodbye(){
	var htmlOutput = "Have a nice day!";
	document.getElementById("resultsDiv").innerHTML = htmlOutput;
}