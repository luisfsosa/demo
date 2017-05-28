(function() {
	var app = angular.module('home', []);

	app.controller('HomeController', function($http) {
		
		var self = this;
		
		$http.get('/user/').then(function(response) {
			self.user = response.data.name;
		});
	});
})();
