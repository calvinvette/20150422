// index.js


//callback
function pressMe() {
	console.log("The Button was Pressed.");
	//var myPara = document.createElement("p");
	//myPara.innerHTML = "<h6>I was added @" + new Date() + "</h6>";
	//document.getElementsByTagName("body")[0].appendChild(myPara);
	//document.getElementById("content").appendChild(myPara);
	var xhr = new XMLHttpRequest(); // AJAX
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("content").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "other.html");
	xhr.send();
	
}


// anonymous (inline) callback function
window.addEventListener("load", function() {
	
	console.log("Don't ever use an alert box.");

	var btnPressMe = document.getElementById("btnPressMe");

	//btnPressMe.addEventListener("click", pressMe);
	btnPressMe.onclick = pressMe;
});

function flyby(elem) {
	console.log("Flew over element: " + elem);
	console.log(elem);
}