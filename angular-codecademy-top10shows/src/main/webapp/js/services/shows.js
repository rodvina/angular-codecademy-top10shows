//Option1: Service defined off of the one main app in app.js
//app.factory('shows', ['$http', 
//        function($http) {
//  			return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json')
//  				.success(function(data) {
//  					return data;
//  				})
//                .error(function(err) {
//                    return err;
//                });
//
//}]);

//Option2: Separate module that gets injected into app
angular.module('ServiceMod', [])
	.factory('shows', ['$http', '$log', 
	        function($http, $log) {
				$log.info('calling amazon shows api service...')
	  			return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json')
	  				.success(function(data) {
	  					return data;
	  				})
	                .error(function(err) {
	                    return err;
	                });
	}]);  			