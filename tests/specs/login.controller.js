(function () {
	"use strict";

	var assert = chai.assert;

	suite ("login controller", function(){

		var mockLoginService = {};  //for $provide
		var $httpBackend;

		var loginController;  //for testing
		var $rootScope;  //also for testing

		setup(module('football'));

		setup(module(function($provide) {
        $provide.value('LoginService', mockLoginService);

      }));


		setup(inject(function ($controller, $q, _$httpBackend_, _$rootScope_){
			$rootScope = _$rootScope_;
			loginController = $controller("LoginController");

			mockLoginService.login = function() {
				// must ret a promise 
				var def = $q.defer();

				def.resolve({ 
					"uid": "12345"
				});

				return def.promise;
			}

			$httpBackend = _$httpBackend_;			
			
			$httpBackend
                .whenGET("html/home.html")
                .respond("");

	    }));

	    test("sanity check", function() {

	    	assert.strictEqual(1,1, "1 returns 1");

	    });

	    test("login works", function(){

	    	var result = loginController.login();
	    	assert.ok(result, "result exists");
	    	assert.isFunction(result.then, "login has a promise");

	    	result.then(function(){
    			assert.ok(true, "asserts that the promise resolved");
    		})
    		.catch(function(){
    			assert.ok(false, "the login promise has failed");
    		});
	    	$rootScope.$digest();
	    })

	});

})();