/*
JS Script for HW6 - Part 2
Written by Brianna Cottrill 11/10/2018
Script accepts user input, some text and a char.  Searches the text for all instances of the char and returns the number of instances.
*/

function processText(){
	var userText = document.getElementById("inputArea").value;
	var userChar = document.getElementById("charInput").value;
	var charCount = 0;
	
	for(var i = 0; i < userText.length; i++){
		if (userText.charAt(i) == userChar){
			charCount++;
		}
	}
	
	var htmlOutput = "";
    if(charCount != 0){
		htmlOutput = "The number of instances of " + userChar + " in the text is: " + charCount;
		document.getElementById("resultsArea").innerHTML = htmlOutput;
	}else{
		htmlOutput = "Search character (" + userChar+ ") not found in text string!";
		var newWindow = window.open("", "new_window", "top=100,left=5,width=300,height=100");
		newWindow.focus();
		newWindow.document.write(htmlOutput);
		newWindow.document.close();
	}
}

function clearPage(){
	document.getElementById("resultsArea").innerHTML = "";
}