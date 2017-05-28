(function() {
	var app = angular.module('message', []);

	app.controller('MessageController', function($http) {
		
		var self = this;
		
		$http.get('/resource/').then(function(response) {
			self.greeting = response.data;
		});
	});
})();