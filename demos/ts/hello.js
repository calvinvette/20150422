var Customer = (function () {
    function Customer(firstName, lastName, phoneNumber, customerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.customerId = customerId;
        this.fullName = this.firstName + " " + this.lastName;
        console.log("Instantiated: " + this.fullName);
    }
    return Customer;
})();
function hello(person) {
    return "Hello, " + person.firstName;
}
var divContent = document.getElementById("content");
var harry = new Customer("Harry", "Potter", "+44 0206 555-1212", "-1");
divContent.innerHTML = hello(harry);
