/**
 * LoginRegistration.controller.js
 *
*/
angular.module('tApp').controller('LoginRegistration', function($scope) {
	$scope.userName = "";
	$scope.email = "";
	$scope.password = "";
	$scope.confirmPassword = "";
	$scope.displayName = "";
	
	$scope.Login = function() {
		console.log("Login Pressed: " + $scope.userName + " - " + $scope.password);
	};

});