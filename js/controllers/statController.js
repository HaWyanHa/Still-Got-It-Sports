(function () {
	"use strict";


	angular.module("football")
		.controller("StatController", StatController);


		StatController.$inject = ["PlayerService"];

		function StatController(PlayerService) {
			this.player = PlayerService.getAllPlayers;
		
			this.addPoints = function addPoints(player){
			return (player.rec) + (player.rtd * 5) + (player.tackles) + (player.dint * 5) + (player.dtd * 7) + (player.comp) + (player.ptd * 3) - (player.pint * 3);

			};

			this.sortType = this.addPoints;
			this.sortReverse = false;
			this.searchPlayer = "";

		}

})();