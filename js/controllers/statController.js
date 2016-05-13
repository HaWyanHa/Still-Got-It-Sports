(function () {
	"use strict";


	angular.module("football")
		.controller("StatController", StatController);


		StatController.$inject = ["PlayerService"];

		function StatController(PlayerService) {
			this.player = PlayerService.getAllPlayers;
		
			this.addPoints = function addPoints(player){
				var rec = player.rec;
				var rtd = player.rtd;
				var tackles = player.tackles;
				var dint = player.dint;
				var dtd = player.dtd;
				var comp = player.comp;
				var ptd = player.ptd;
				var pint = player.pint;

				if (player.female) {
					return rec + (rtd * 7) + tackles + (dint * 10) + (dtd * 10) + comp + (ptd * 5) - (pint * 3);
				} else {
					return rec + (rtd * 5) + tackles + (dint * 5) + (dtd * 7) + comp + (ptd * 3) - (pint * 3);
				}
			};

			this.sortType = this.addPoints;
			this.sortReverse = false;
			this.searchPlayer = "";

		}

})();