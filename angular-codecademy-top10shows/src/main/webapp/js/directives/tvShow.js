//Option1: Directive defined off of the one main app in app.js
//app.directive('tvShow', 
//function() {
//	return {
//	    restrict: 'E',
//	    scope: {
//	      info: '='
//	    },
//	   	templateUrl: 'js/directives/tvShow.html' 
//  }
//});

//Option2: Separate module that gets injected into app
angular.module('DirectiveMod', [])
	.directive('tvShow', 
			function() {
				return {
				    restrict: 'E',
				    scope: {
				      info: '='
				    },
				   	templateUrl: 'js/directives/tvShow.html' 
			  }
			});
