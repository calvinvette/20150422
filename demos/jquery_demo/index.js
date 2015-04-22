// index.js


//callback
function pressMe() {
	console.log("The Button was Pressed.");
	//var myPara = document.createElement("p");
	//$(myPara).html("<h6>I was added @" + new Date() + "</h6>");
	//$("body")[0].appendChild(myPara);
	//$("#content").appendChild(myPara);
	$.get("other.html").done(function(data) {
		$("#content").html(data);
	});
	
}


// anonymous (inline) callback function
$(document).ready(function() {
	console.log("Don't ever use an alert box.");
	$("#btnPressMe").click(pressMe);
});

function flyby(elem) {
	console.log("Flew over element: " + elem);
	console.log(elem);
}