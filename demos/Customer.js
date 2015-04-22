var Customer = function(firstName, lastName) {
		this.firstName = firstName || ""; // falsey  vs. truthy
		this.lastName = lastName || "";
};

Customer.prototype.getFirstName = function() {
	return this.firstName;
};

Customer.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

Customer.prototype.getLastName = function() {
	return this.lastName;
};

Customer.prototype.setLastName = function(lastName) {
	this.lastName = lastName;
};

Customer.prototype.toString = function() {
	return "Customer: " + this.getFirstName() + " " + this.getLastName();
};


// var hermione = new Customer();
// hermione.setFirstName("Hermione");
// hermione.setLastName("Granger");
//
// var harry = new Customer("Harry", "Potter");
