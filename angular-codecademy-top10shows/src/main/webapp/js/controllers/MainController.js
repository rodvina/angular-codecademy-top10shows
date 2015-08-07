//Option1: Controller defined off of the one main app in app.js
//app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
//  shows.success(function(data) {
//  	$scope.shows = data;
//  })
//}]);

//Option2: Separate module that gets injected into app
angular.module('ControllerMod', [])
	.controller('MainController', ['$scope', 'shows', function($scope, shows) {
		  shows.success(function(data) {
			  	$scope.shows = data;
			  })
	}]);