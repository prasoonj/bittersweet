var bittersweet = angular.module('bittersweet', []);

bittersweet.controller('mainController', ['$scope', function($scope){
    $scope.textResources = {
    	main:{
    		headline: "How was your day?"
    }};
    $scope.test = "test";
}]);