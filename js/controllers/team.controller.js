(function () {
	"use strict";

	angular.module("football")
		.controller("TeamController", TeamController);


		TeamController.$inject = ["TeamService"];

		function TeamController(TeamService) {


			console.log('in TeamController');
			this.team = TeamService.getAllTeams;
			this.first = TeamService.getAllTeams[0];

			this.gamesBehind = function gamesBehind(team){
				console.log(this.first, team);
				return ((this.first.wins - team.wins) + (team.loss - this.first.loss))/2;
			};

		}

})();