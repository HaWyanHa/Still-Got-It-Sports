(function () {
	"use strict";

	angular.module("football")
		.factory("TeamService", TeamService);

		var teams = [
			{ "color": "Blue", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Red", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Green", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "White", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Black", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Yellow", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Purple", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Orange", "wins": 10, "loss": 2, "gb": 0, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  }
		];

		function TeamService (){
			return {
				getAllTeams: teams
			};
		}

		

})();