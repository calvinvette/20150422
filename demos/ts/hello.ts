class Customer {
	fullName : string;
	constructor(
		public firstName : string,
		public lastName : string,
		public phoneNumber : string,
		public customerId : string
	) {
		this.fullName = this.firstName + " " + this.lastName;
		console.log("Instantiated: " + this.fullName);	
	}
}

interface Person {
	firstName : string;
	lastName : string;
	fullName : string;
}

function hello(person : Person) {
	return "Hello, " + person.firstName;
}

var divContent = document.getElementById("content");
var harry = new Customer("Harry", "Potter", "+44 0206 555-1212", "-1");

divContent.innerHTML = hello(harry);
