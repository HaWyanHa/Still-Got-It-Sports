(function () {
	"use strict";

	angular.module("football")
		.factory("TeamService", TeamService);

		var teams = [
			{ "color": "Blue", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  }
		];

		function TeamService (){
			return {
				getAllTeams: teams
			};
		}

})();