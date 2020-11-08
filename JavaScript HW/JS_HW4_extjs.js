
$(document).ready(function(){
	$("#squareForm").validate({
		rules:{
			numInput: {required: true, number: true, min: 2, max: 10}
		}
	});
});

function process(){
	if($("#squareForm").valid()){
	var star = document.getElementById("numInput").value;
	star = parseInt(star);
	//star = Number(star);
	var htmloutput = "";
	//htmloutput += star;
	
	for (i = 1; i <= star; i++){
		if(i == 1 || i == star){
			//var starRow = "*" * star;
			var starColumn = 1;
			while (starColumn <= star){
				htmloutput += "*";
				starColumn++;
			}
			htmloutput += "<br>";
		}
		else{
			htmloutput += "*";
			var gap = 2;
			while (gap < star){
				htmloutput += "&nbsp;";
				gap++;
			}
			htmloutput += "* <br>";
		}
	}
	
	document.getElementById("resultsDiv").innerHTML = htmloutput;
	}
}