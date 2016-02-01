var phonecatControllers = angular.module('customerControllers', []);

phonecatControllers.controller('CustomerListCtrl', function($scope, $http) {
	$http.get('/allCustomers').success(function(data) {
		$scope.users = data;
	});
	$scope.submitMyForm = function(){
		var formData = $scope.cust;
		$http.post('/addCustomer', formData).success(function(data,status,headers,config) {
			$scope.users.push(formData);
			$scope.name = '';
			$scope.account = '';
			$scope.number = '';
			$scope.street = '';
			$scope.town = '';
			$scope.postcode = '';
		}).error(function(data,status,headers,config) {
			console.log('error while adding customer');
		});
	}
});