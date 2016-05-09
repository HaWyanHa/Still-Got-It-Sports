(function () {
	"use strict";


	angular.module("football")
		.controller("StatController", StatController);


		StatController.$inject = ["League"];

		function StatController(League) {
			this.player = League.player;
		}

})();