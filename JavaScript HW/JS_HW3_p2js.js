/*
JavaScript file for HW3 - Part 2
Gets user input (number of items sold), calculates the sales amounts for each item sold, 
calculates gross earnings, then calculates salesperson's commission and sends the totals back to the user.
*/


$(document).ready(function(){
	$("#salesForm").validate({
		rules: {
			item1: {number: true, min: 0},
			item2: {number: true, min: 0},
			item3: {number: true, min: 0},
			item4: {number: true, min: 0}
		}
	});	
	$("inputForm").tooltip();
});

function calculateEarnings(){
  if($("#salesForm").valid()){	
	var numSold1, numSold2, numSold3, numSold4;
	var total1, total2, total3, total4;
	var totalSold, totalEarnings;
	
	var basePay = 200.00;
	var commPercent = 0.09;
	
	var valueItem1 = 239.99;
	var valueItem2 = 129.75;
	var valueItem3 = 99.95;
	var valueItem4 = 350.89;
	
	// Get and parse number of each item sold
	numSold1 = document.getElementById("item1").value;
	numSold1 = parseInt(numSold1);
	numSold2 = document.getElementById("item2").value;
	numSold2 = parseInt(numSold2);
	numSold3 = document.getElementById("item3").value;
	numSold3 = parseInt(numSold3);
	numSold4 = document.getElementById("item4").value;
	numSold4 = parseInt(numSold4);
	
	//Calculate the total sold for each item
	total1 = calculateItemTotal(numSold1, valueItem1);
	total2 = calculateItemTotal(numSold2, valueItem2);
	total3 = calculateItemTotal(numSold3, valueItem3);
	total4 = calculateItemTotal(numSold4, valueItem4);
	
	//Calculate the total amount sold
	totalSold = total1 + total2 + total3 + total4;
	totalSold = totalSold.toFixed(2);
	
	//Calculate the salesperson's total earnings
	totalEarnings = basePay + commPercent * totalSold;
	totalEarnings = totalEarnings.toFixed(2);
	
	//To make sure item totals print in currency format
	total1 = total1.toFixed(2);
	total2 = total2.toFixed(2);
	total3 = total3.toFixed(2);
	total4 = total4.toFixed(2);
	
	//Return values to hmtl page
	document.getElementById("numSold1").innerHTML = numSold1;
	document.getElementById("numSold2").innerHTML = numSold2;
	document.getElementById("numSold3").innerHTML = numSold3;
	document.getElementById("numSold4").innerHTML = numSold4;
	
	document.getElementById("itemSold1").innerHTML = "$" + total1;
	document.getElementById("itemSold2").innerHTML = "$" + total2;
	document.getElementById("itemSold3").innerHTML = "$" + total3;
	document.getElementById("itemSold4").innerHTML = "$" + total4;
	
	document.getElementById("amtSold").innerHTML = "$" + totalSold;
	document.getElementById("wklyEarnings").innerHTML = "$" + totalEarnings;
  }	
}

//Parameters: number of items sold, the value of the given item.
//Returns: numItems * itemValue
function calculateItemTotal(numItems, itemValue){
	var total;
	total = numItems * itemValue;
	total = Number(total); //Needed to add this or else no output was recieved.
	return total;
}