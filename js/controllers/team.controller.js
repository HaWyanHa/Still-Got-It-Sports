(function () {
	"use strict";

	angular.module("football")
		.controller("TeamController", TeamController);


		TeamController.$inject = ["TeamService"];

		function TeamController(TeamService) {
			console.log('in TeamController');
			this.team = TeamService.getAllTeams;


		}

})();