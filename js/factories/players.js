(function () {
	"use strict";

	angular.module("football")
		.factory("League", League);

		var player = [
			{ "name": "Ryan", "rec": 10, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "points": 100  }
		];

		function League (){
			return {
				player: player,
				point: addPoints
			};
		}

		function addPoints(i){
			return (player[i].rec) + (player[i].rtd * 5);

		}

})();