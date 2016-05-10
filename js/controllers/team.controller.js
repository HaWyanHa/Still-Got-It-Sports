(function () {
	"use strict";

	angular.module("football")
		.controller("TeamController", TeamController);


		TeamController.$inject = ["TeamService"];

		function TeamController(TeamService) {
			this.team = TeamService.getAllTeams;


		}

})();