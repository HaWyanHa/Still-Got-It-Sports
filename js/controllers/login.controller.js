(function () {
	"use strict";

	angular.module("football")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state"];

	function LoginController($state) {
		this.login = function login(){
			FB.login(function(loginResponse){
				console.log(loginResponse);
				console.log(loginResponse.authResponse);


				FB.api(
				    "/" + loginResponse.authResponse.userID + "?fields=id,name,picture",
				    function (userResponse) {
				      if (userResponse && !userResponse.error) {
				        /* handle the result */
				        console.log(userResponse);
				      }
				    }
				);
			});
		};
	}


})();