var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Customer = (function () {
    function Customer(firstName, lastName, phoneNumber, customerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.customerId = customerId;
        this.isCurrentInPayments = false;
        this.payments = [
            new Payment(new Date(), 543.25, "Check", "MyBank:Acct#")
        ];
        this.fullName = this.firstName + " " + this.lastName;
        console.log("Instantiated: " + this.fullName);
    }
    Customer.prototype.toString = function () {
        return "Customer#" + this.customerId + ": " + this.fullName;
    };
    ;
    return Customer;
})();
var Payment = (function () {
    function Payment(paymentDate, amount, type, memo) {
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.type = type;
        this.memo = memo;
    }
    Payment.PAYMENT_TYPES = [
        "Check",
        "Credit Card",
        "BitCoin",
        "PayPal"
    ];
    return Payment;
})();
var CheckPayment = (function (_super) {
    __extends(CheckPayment, _super);
    function CheckPayment(paymentDate, amount, type, memo, bankABARoutingNumber, accountNumber) {
        _super.call(this, paymentDate, amount, type, memo);
        this.bankABARoutingNumber = bankABARoutingNumber;
        this.accountNumber = accountNumber;
    }
    Object.defineProperty(CheckPayment.prototype, "bankABARoutingNumber", {
        //@RolesAllowed("Manager")
        get: function () {
            return this._bankABARoutingNumber;
        },
        set: function (bankABARoutingNumber) {
            if (bankABARoutingNumber > 0) {
                this._bankABARoutingNumber = bankABARoutingNumber;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(CheckPayment.prototype, "accountNumber", {
        //@RolesAllowed("Manager")
        get: function () {
            return this._accountNumber;
        },
        set: function (accountNumber) {
            if (accountNumber > 0) {
                this._accountNumber = accountNumber;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return CheckPayment;
})(Payment);
function findCustomerById(customerId) {
    return new Customer("Ginny", "Weasley", "+44 0206 555-1313", customerId);
}
function hello(person) {
    return "Hello, " + person.firstName;
}
var divContent = document.getElementById("content");
var harry = new Customer("Harry", "Potter", "+44 0206 555-1212", -1);
var foundCustomer = findCustomerById(2134).toString();
divContent.innerHTML = hello(harry);
