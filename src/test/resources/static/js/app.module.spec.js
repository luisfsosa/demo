describe("App", function() {

	beforeEach(module('hello'));
	var $httpBackend, $controller, $http;
	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$controller = $injector.get('$controller');
		$http = $injector.get('$http');
	}));
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	

	describe("Home Controller", function() {

		it("says Hello User when controller loads", function() {
			$httpBackend.expectGET('/user/').respond(200, {
				name : 'Felipe'
			});
			var controller = $controller('HomeController');
			$httpBackend.flush();
			expect(controller.user).toEqual('Felipe');
		});

	});

	

})
