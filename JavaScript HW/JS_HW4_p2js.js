function process(){
	
	var htmloutput = "";
	htmloutput += "<h1>Compound Interest</h1>";
	htmloutput += "<table id='interestTable'>";
	htmloutput += "<tr id='firstRow'><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr>";
	
	for(var intRate = .05; intRate <= .10; intRate += .01){
		var amtArray = calculateInterest(intRate);
		for (var arrIndex = 0; arrIndex < amtArray.length; arrIndex++){
			var year = arrIndex + 1;
			htmloutput += "<tr>";
			htmloutput += "<td>" + year + "</td>";
			htmloutput += "<td>" + amtArray[arrIndex] + "</td>";
			htmloutput += "<td>" + intRate.toFixed(2) + "</td>";
			htmloutput += "</tr>";	
		}
	}
	
	htmloutput += "</table>";
	document.getElementById("bodyDiv").innerHTML = htmloutput;
}

function calculateInterest(rate){
	var arr = [];
	var arrIndex = 0;
	
	var principal = 1000;
	var accumulated;

	for (var year = 1; year <= 10; year++){
		accumulated = principal * Math.pow((1 + rate), year);
		accumulated = accumulated.toFixed(2);
		arr[arrIndex] = accumulated;
		arrIndex++;
	}
	
	return arr;
}