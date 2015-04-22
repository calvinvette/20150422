var theCustomer = new Customer(); // Global namespace pollution
	
//$(document).ready(function() {
//	console.log("other.js");
var init = function() {
	
	$("#txtFirstName").on("change", function() {
		// conversion/transformation, validation
		theCustomer.setFi rstName($("#txtFirstName").val());
	});
	$(document).on("customerChange.lastName", function(evt, data) {
		theCustomer.setLastName(data);
		$("#txtLastName").val(theCustomer.getLastName());
	});
	$(document).on("customerChange.firstName", function(evt, data) {
		theCustomer.setFirstName(data);
		$("#txtFirstName").val(theCustomer.getFirstName());
	});
};
//});