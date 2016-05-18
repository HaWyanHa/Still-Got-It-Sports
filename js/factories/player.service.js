(function () {
	"use strict";

	angular.module("football")
		.factory("PlayerService", PlayerService);

		PlayerService.$inject = ["$firebaseArray", "$firebaseObject"];

		// var players = [
		// 	{ "name": "Ryan", "rec": 11, "rtd": 3, "tackles": 14, "dint": 1, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Alex", "rec": 12, "rtd": 2, "tackles": 10, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "gender": "male" },
		// 	{ "name": "Liz", "rec": 13, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 0, "gender": "female"  },
		// 	{ "name": "Sam", "rec": 14, "rtd": 2, "tackles": 6, "dint": 0, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Jordan", "rec": 15, "rtd": 2, "tackles": 4, "dint": 0, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Matt", "rec": 16, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 10, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Noelle", "rec": 17, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 1, "comp": 18, "ptd": 0, "pint": 1, "gplay": 1, "gender": "female"  },
		// 	{ "name": "Bo", "rec": 18, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 11, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Russ", "rec": 19, "rtd": 2, "tackles": 8, "dint": 1, "dtd": 0, "comp": 17, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Nadia", "rec": 22, "rtd": 2, "tackles": 9, "dint": 0, "dtd": 0, "comp": 16, "ptd": 1, "pint": 1, "gplay": 1, "gender": "female"  },
		// 	{ "name": "Steve", "rec": 23, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 15, "ptd": 6, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Su", "rec": 10, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "gender": "female" },
		// 	{ "name": "Mike", "rec": 34, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 19, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Dana", "rec": 10, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 13, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male"  }
		// ];

		function PlayerService ($firebaseArray, $firebaseObject){
			var playersLink = new Firebase("https://fiery-torch-4227.firebaseio.com/");
			var players = $firebaseArray(playersLink);

			return {
				allPlayers: players,
				createPlayer: createPlayer,
				savePlayer: savePlayer,
				deletePlayer: deletePlayer
			};

			function createPlayer(playerName, gender) {
				players.$add({name: playerName, rec: 0, rtd: 0, tackles: 0, dint: 0, dtd: 0, comp: 0, ptd: 0, pint: 0, gplay: 0, gender: gender});
			}

			function savePlayer(playerStats){
				var playerObject = new Firebase("https://fiery-torch-4227.firebaseio.com/" + playerStats.$id);
				playerObject.update({"rec": playerStats.rec, "rtd": playerStats.rtd, "tackles": playerStats.tackles, "dint": playerStats.dint, "dtd": playerStats.dtd, "comp": playerStats.comp, "ptd": playerStats.ptd, "pint": playerStats.pint, "gplay": playerStats.gplay});
			}

			function deletePlayer(playerStats) {
				console.log(playerStats);
				var playerObject = new Firebase("https://fiery-torch-4227.firebaseio.com/" + playerStats.$id);
				$firebaseObject(playerObject).$remove();
			}
		}



})();