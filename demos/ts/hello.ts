/** JSDoc 

*/

class Customer implements Person {
	birthDate : Date;
	fullName : string;
	isCurrentInPayments : boolean = false;
	payments : Payment[] = [
		new Payment(new Date(), 543.25, "Check", "MyBank:Acct#")
	];
	constructor(
		public firstName : string,
		public lastName : string,
		public phoneNumber : string,
		public customerId : number
	) {
		this.fullName = this.firstName + " " + this.lastName;
		console.log("Instantiated: " + this.fullName);	
	}
	toString() : string {
		return "Customer#" + this.customerId + ": " + this.fullName;
	};
}

class Payment {
	static PAYMENT_TYPES : string[] = [
		"Check",
		"Credit Card",
		"BitCoin",
		"PayPal"
	];
	constructor(
		public paymentDate : Date,
		public amount : number,
		public type : string, 
		public memo : string
	) {
	}
}

class CheckPayment extends Payment { // CheckPayment IS A Payment
	private _bankABARoutingNumber : number;
	private _accountNumber : number;
	constructor(
		paymentDate : Date,
		amount : number,
		type : string, 
		memo : string,
		bankABARoutingNumber : number, 
		accountNumber : number) {
		super(paymentDate, amount, type, memo);
		this.bankABARoutingNumber = bankABARoutingNumber;
		this.accountNumber = accountNumber;
	}
	//@RolesAllowed("Manager")
	get bankABARoutingNumber() : number {
		return this._bankABARoutingNumber;
	};
	set bankABARoutingNumber(bankABARoutingNumber : number) {
		if (bankABARoutingNumber > 0) { // Placeholder for real ABA validation later
			this._bankABARoutingNumber = bankABARoutingNumber;
		}
	};
	//@RolesAllowed("Manager")
	get accountNumber() : number {
		return this._accountNumber;
	};
	set accountNumber(accountNumber : number) {
		if (accountNumber > 0) { // Placeholder for acct# validation later
			this._accountNumber = accountNumber;
		}
	}
}


interface Person {
	firstName : string;
	lastName : string;
	fullName : string;
	birthDate : Date;
}

function findCustomerById(customerId : number) : Customer {
	return new Customer("Ginny", "Weasley", "+44 0206 555-1313", customerId);
}

function hello(person : Person) : string {
	return "Hello, " + person.firstName;
}

var divContent = document.getElementById("content");
var harry = new Customer("Harry", "Potter", "+44 0206 555-1212", -1);

var foundCustomer : string = findCustomerById(2134).toString();

divContent.innerHTML = hello(harry);
