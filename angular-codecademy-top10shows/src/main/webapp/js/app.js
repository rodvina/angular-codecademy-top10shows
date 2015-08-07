//Global app where dependencies (services, controllers, etc) are constructed from
//var app = angular.module('Top10App', []);

//Injected dependent modules
angular.module('Top10App', ['ControllerMod', 'DirectiveMod', 'ServiceMod']);

