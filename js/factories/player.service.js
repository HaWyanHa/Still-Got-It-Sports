(function () {
	"use strict";

	angular.module("football")
		.factory("PlayerService", PlayerService);

		PlayerService.$inject = ["$firebaseArray"];

		// var players = [
		// 	{ "name": "Ryan", "rec": 11, "rtd": 3, "tackles": 14, "dint": 1, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "female": false  },
		// 	{ "name": "Alex", "rec": 12, "rtd": 2, "tackles": 10, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "female": false  },
		// 	{ "name": "Liz", "rec": 13, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 0, "female": true  },
		// 	{ "name": "Sam", "rec": 14, "rtd": 2, "tackles": 6, "dint": 0, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Jordan", "rec": 15, "rtd": 2, "tackles": 4, "dint": 0, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Matt", "rec": 16, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 10, "ptd": 0, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Noelle", "rec": 17, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 1, "comp": 18, "ptd": 0, "pint": 1, "gplay": 1, "female": true  },
		// 	{ "name": "Bo", "rec": 18, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 11, "ptd": 0, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Russ", "rec": 19, "rtd": 2, "tackles": 8, "dint": 1, "dtd": 0, "comp": 17, "ptd": 2, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Nadia", "rec": 22, "rtd": 2, "tackles": 9, "dint": 0, "dtd": 0, "comp": 16, "ptd": 1, "pint": 1, "gplay": 1, "female": true  },
		// 	{ "name": "Steve", "rec": 23, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 15, "ptd": 6, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Su", "rec": 10, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "female": true },
		// 	{ "name": "Mike", "rec": 34, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 19, "ptd": 0, "pint": 1, "gplay": 1, "female": false  },
		// 	{ "name": "Dana", "rec": 10, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 13, "ptd": 2, "pint": 1, "gplay": 1, "female": true  }
		// ];

		function PlayerService ($firebaseArray){
			var playersLink = new Firebase("https://fiery-torch-4227.firebaseio.com/");
			var players = $firebaseArray(playersLink);

			return {
				allPlayers: players,
				createPlayer: createPlayer
			};

			function createPlayer(playerName) {
				players.$add({name: playerName});
			}
		}



})();