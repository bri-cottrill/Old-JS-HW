/*
  JavaScript file for HW7 - Part 1
  Code for user-selected changes to the page's style elements.
  Written by Brianna Cottrill 11/28/2018
*/

function changeBackground(){
	document.getElementById("theBody").style.backgroundColor = document.querySelector('input[name="colors"]:checked').value;
}

function changeFontFam(){
	document.getElementById("theBody").style.fontFamily = document.querySelector('input[name="fontFamilies"]:checked').value;
}

function changeFontStyle(){
	if(document.getElementById("theBody").style.fontStyle == "italic"){
		document.getElementById("theBody").style.fontStyle = "normal";
	}else{
		document.getElementById("theBody").style.fontStyle = "italic";
	}
}

function changeFontWeight(){
	if(document.getElementById("theBody").style.fontWeight == "normal"){
		document.getElementById("theBody").style.fontWeight = "bold";
	}
	else{
		document.getElementById("theBody").style.fontWeight = "normal";
	}
}

function changeFontSize(){
	document.getElementById("theBody").style.fontSize = myForm.fontSizes.options[myForm.fontSizes.selectedIndex].value;
}