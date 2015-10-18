var app = angular.module('app', []);

app.controller('controller', [
'$scope',
function($scope){
	$scope.message = 'blub';
}]);
