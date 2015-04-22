angular.module("theApp", [])
/*
.config(function($routeProvider) {
	$routeProvider
		.default({
			controller : "OtherController",
			templateUrl : "other.html"
		});
})
*/
.controller("OtherController", function($scope) {

	$scope.theCustomer = new Customer(); // Global namespace pollution

	$scope.addCustomer = function() {
		console.log("Adding " + $scope.theCustomer + " to local db.");
	};
});