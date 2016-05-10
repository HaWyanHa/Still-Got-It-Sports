(function () {
	"use strict";

	angular.module("football")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state"];

	function LoginController($state) {
		this.login = function login(){
			FB.login(function(response){
				console.log("facebook info", response);
			});
		};
	}


})();