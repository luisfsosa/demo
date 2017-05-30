angular.module('demo')
	.config([ '$routeProvider', '$httpProvider', '$locationProvider',
		function($routeProvider, $httpProvider, $locationProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl : 'js/home/home.html',
				controller : 'HomeController',
				controllerAs : 'controller'
			}).when('/message', {
				templateUrl : 'js/message/message.html',
				controller : 'MessageController',
				controllerAs : 'controller'
			}).when('/login', {
				templateUrl : 'js/navigation/login.html',
				controller : 'NavigationController',
				controllerAs : 'controller'
			}).otherwise('/');

			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		} ]).run(function(auth) {

	// Initialize auth module with the home page and
	// login/logout path
	// respectively
	auth.init('/', '/login', '/logout');
});