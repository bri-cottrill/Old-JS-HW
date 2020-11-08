/*

JavaScript file for HW5 - part 1
Written by: Brianna Cottrill 10/28/2018

*/

$(document).ready(function(){
	$("#surveyForm").validate({
		rules:
		{
			nameText: {required: true},
			colors: {required: true},
			continents: {required: true},
			months: {required: true}
		},
		
		errorPlacement: function(error, element){
			if (element.attr("type") == "checkbox"){
				error.appendTo("#checkLabel");
			}
			else if (element.attr("type") == "radio"){
				error.appendTo("#radioLabel");
			}
			else {
				error.insertAfter(element);
			}
		}
	});
});