angular.module('rynoCi', [])

// Controller for List the specs
.controller('ListSpecs', ['$scope', '$http', function($scope, $http) {
	$http.get('/specs/list').
	success(function(data, status, headers, config) {
  		$scope.specs = data;
  	}).
  	error(function(data, status, headers, config) {
  		$scope.message = data;
  	});
  	
  	// Function to run spec
  	$scope.runSpec = function(spec) {
  		$http.get('/specs/execute/' + spec).
  		success(function(data, status, headers, config) {
  			$scope.specsResult = data.result;
  		}).
  		error(function(data, status, headers, config) {
  			$scope.message = data.result;
  		});
  	};
}])