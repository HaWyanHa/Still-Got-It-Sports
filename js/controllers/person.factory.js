(function () {
	"use strict";

	angular.module("football")
		.controller("PersonController", PersonController);

	PersonController.$inject = ["PersonService"];

	function PersonController(PersonService){
		this.person = PersonService.all;
	}

})();