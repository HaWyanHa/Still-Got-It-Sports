(function () {
	"use strict";

	angular.module("football")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state", "LoginService"];

	function LoginController($state, LoginService) {
		var that = this;
		this.login = function login() {
			LoginService.login(function(name, profilePic){
				console.log(name, profilePic);
				that.userData.profilePic = profilePic;

				that.userData.name = name;
			});
		// $state.go("account");
			
		};

		
		this.userData = LoginService.userData();	
	}



})();