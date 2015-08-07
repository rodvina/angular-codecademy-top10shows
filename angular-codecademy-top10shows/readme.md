Code copied from codecademy/angularjs_top-10 pulled into a Spring MVC project for tc server deploy.

Angular code is under webapp.

SpringMVC servlet will only intercept /rest url pattern.

Included alterative means for defining and injecting dependencies

###Global app where dependencies (services, controllers, etc) are constructed from
`var app = angular.module('Top10App', []);`

###Injected dependent modules
`angular.module('Top10App', ['ControllerMod', 'DirectiveMod', 'ServiceMod']);`
