/*

JavaScript file for HW5 - Part 2
Written by Brianna Cottrill 10/27/18


note: this file was ultimately unused.  the code was moved to the html file's script tag
*/

//For the sillySites nav menu that uses onclick
function goToNewPageClick(myForm){
	var mydest = myForm.sillySites.options[myForm.sillySites.selectedIndex].value;
	window.location = mydest;
}

//For the calmSites nav menu that uses onchange
function goToNewPageChange(myForm){
	var mydest = myForm.calmSites.options[myForm.calmSites.selectedIndex].value;
	window.location = mydest;
}