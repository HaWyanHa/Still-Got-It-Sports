(function () {
	"use strict";

	angular.module("football")
		.factory("PlayerService", PlayerService);

		var players = [
			{ "name": "Ryan", "rec": 10, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1  }
		];

		function PlayerService (){
			return {
				getAllPlayers: players,
				createPlayer: createPlayer
			};
		}

		function createPlayer(){

		}



})();