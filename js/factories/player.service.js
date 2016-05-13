(function () {
	"use strict";

	angular.module("football")
		.factory("PlayerService", PlayerService);

		var players = [
			{ "name": "Ryan", "rec": 11, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Alex", "rec": 12, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Liz", "rec": 13, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "female": true  },
			{ "name": "Sam", "rec": 14, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Jordan", "rec": 15, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Matt", "rec": 16, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Noelle", "rec": 17, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "female": true  },
			{ "name": "Bo", "rec": 18, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Russ", "rec": 19, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Nadia", "rec": 22, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "female": true  },
			{ "name": "Steve", "rec": 23, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Su", "rec": 10, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "female": true },
			{ "name": "Mike", "rec": 34, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  },
			{ "name": "Dana", "rec": 10, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  }
		];

		function PlayerService (){
			return {
				getAllPlayers: players
			};
		}



})();