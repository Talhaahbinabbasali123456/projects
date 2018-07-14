function ask() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "<br>" + "<br>" + "<p>" + "Be Carefully..!! if you submit your Answer wrong then you will be promoted to Q1 again." + "</p>" +"Q1 = Guess the output ??" + "<br>"
	 + "<br>" + "(2===2)" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button onclick='submit()'>" +
	   "Submit" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submit() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector("#innerinp").value;
	if (userAns === "True") {
		changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML += "<br>" + "<button onclick='nextQues()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again";

	}
}
function refresh() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";

}
function nextQues() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Be Carefully..!! if you submit your Answer wrong then you will be promoted to Q1 again." + "</p>" + "<br>" +"Q2 = Guess the output ??" + "<br>"
	 + "<br>" + "((50 < 90) && (60 > 70))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button onclick='submitTwo()'>" +
	   "Submit" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitTwo() {
	let changeEle = document.querySelector(".show");
	let right = "False";
	let wrong = "";
	let userAns = document.querySelector("#innerinp").value;
	if (userAns === "False") {
		changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML += "<br>" + "<button onclick='nextQuesThree()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again";
		
	}
}
function nextQuesThree() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Be Carefully..!! if you submit your Answer wrong then you will be promoted to Q1 again." + "</p>" + "<br>" +"Q3 = Guess the output ??" + "<br>"
	 + "<br>" + "((30 > 40) || (50 < 90))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button onclick='submitThree()'>" +
	   "Submit" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitThree() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector("#innerinp").value;
	if (userAns === "True") {
		changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML += "<br>" + "<button onclick='nextQuesFour()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again"; 
		
	}
}
function nextQuesFour() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Be Carefully..!! if you submit your Answer wrong then you will be promoted to Q1 again." + "</p>" + "<br>" +"Q4 = Guess the output ??" + "<br>"
	 + "<br>" + "(30 === 30) || ((50 < 49) && (70 < 71))" + "<br>" + "True Or False" + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button onclick='submitFour()'>" +
	   "Submit" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitFour() {
	let changeEle = document.querySelector(".show");
	let right = "True";
	let wrong = "";
	let userAns = document.querySelector("#innerinp").value;
	if (userAns === "True") {
		changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML += "<br>" + "<button onclick='nextQuesFive()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again"; 
		
	}
}
function nextQuesFive() {
	let changeEle = document.querySelector(".show");
	changeEle.innerHTML = "";
	changeEle.innerHTML += "<br>" + "<p>" + "Be Carefully..!! if you submit your Answer wrong then you will be promoted to Q1 again." + "</p>" + "<br>" +"Q5 = What console print ??" + "<br>"
	 + "<br>" + "if (50 > 30) {" + "<br>" + "console.log('Happy');" + "<br>" + "} else {" + "<br>" + "console.log('Sad');" + "<br>" + "}" + "<br>"  + "<br>" + "Your Answer should be start with Capital letter"
	  + "<br>" + "<br>" + "<input id='innerinp' placeholder='Answer'>" 
	  + "<br>" + "<br>" + "<br>" + "<button onclick='submitFive()'>" +
	   "Submit" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";

}
function submitFive() {
	let changeEle = document.querySelector(".show");
	let right = "Happy";
	let wrong = "";
	let userAns = document.querySelector("#innerinp").value;
	if (userAns === "Happy") {
		changeEle.innerHTML = "Right Answer";
		changeEle.innerHTML += "<br>" + "<button onclick='nextQuesFive()'>" + "Next Question" + "</button>" + "<br>" + "<button onclick='refresh()'>" + "Reload Quiz" + "</button>";
	} else if (userAns === "") {
		alert ("??? Answer area is empty");
	} else {
		changeEle.innerHTML = "Wrong Answer" + "<br>" + "Try Again"; 
		
	}
}