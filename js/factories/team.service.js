(function () {
	"use strict";

	angular.module("football")
		.factory("TeamService", TeamService);

		var teams = [
			{ "color": "Blue", "wins": 10, "loss": 2, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Red", "wins": 9, "loss": 3, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Green", "wins": 8, "loss": 4, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "White", "wins": 7, "loss": 5, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Black", "wins": 6, "loss": 6, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Yellow", "wins": 5, "loss": 7, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Purple", "wins": 3, "loss": 9, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Orange", "wins": 2, "loss": 10, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  }
		];

		function TeamService (){
			return {
				getAllTeams: teams
			};
		}

		

})();