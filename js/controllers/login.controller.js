(function () {
	"use strict";

	angular.module("football")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state"];

	function LoginController($state) {
		$state.go("login");
	}


})();