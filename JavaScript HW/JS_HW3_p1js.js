/*
JavaScript file for HW3 - Part 1
Gets and processes 4 integers, a student's grades.  A final avarage is calculated from the input and returned.  Output is final average, letter grade, and a notice of pass or failure.

jQuery is a slideToggle to Show/Hide instructions.
*/

$(document).ready(function(){
	$("#showDiv").click(function(){
		$("#instructionsDiv").slideToggle("slow");
	});
	$("#gradesForm").validate({
		rules: {
			hwAverage: {required: true, number: true, min: 0, max: 100},
			midTerm: {required: true, number: true, min: 0, max: 100},
			finalExam: {required: true, number: true, min: 0, max: 100},
			ACR: {required: true, number: true, min: 0, max: 100}
		}
	});
});

function calculateGrades(){
	if($("#gradesForm").valid()){
	  var hwAvg, midGrade, finExam, acr;
	  var finalAvg, letterGrade, passORfail;

      //Get and parse user input	  
	  hwAvg = document.getElementById("hwAverage").value;
	  hwAvg = parseInt(hwAvg);
	  midGrade = document.getElementById("midTerm").value;
	  midGrade = parseInt(midGrade);
	  finExam = document.getElementById("finalExam").value;
	  finExam = parseInt(finExam);
	  acr = document.getElementById("ACR").value;
	  acr = parseInt(acr);
	
	  //Calculate final avarage
	  finalAvg = (.5 * hwAvg) + (.2 * midGrade) + (.2 * finExam) + (.1 * acr);
	  finalAvg = Math.round(finalAvg);
	
	  //Determine grade to be sent bacl to the HTML page
	  switch(true){
		  case finalAvg >= 90:
		    letterGrade = 'A';
		    passORfail = "Student has passed the course.";
		    break;
		  case finalAvg >= 80:
            letterGrade = 'B';
		    passORfail = "Student has passed the course.";
            break;
          case finalAvg >= 70:
            letterGrade = 'C';
		    passORfail = "Student has passed the course.";
            break;
          case finalAvg >= 60:
            letterGrade = 'D';
		    passORfail = "Student must retake the course.";
            break;
		  case finalAvg >= 0:
            letterGrade = 'F';
            passORfail = "Student must retake the course.";
            break;
	}
	  //Send output back to the HTML page
	  document.getElementById("finalAverage").innerHTML = finalAvg;
	  document.getElementById("letterGrade").innerHTML = letterGrade;
	  document.getElementById("passFail").innerHTML = passORfail;
	}
}