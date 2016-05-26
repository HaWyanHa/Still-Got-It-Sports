(function () {
	"use strict";

	angular.module("football")
		.controller("PersonController", PersonController);


		function PersonController() {

			this.all = [
				{ "team": "Green Team", "rec": 11, "rtd": 3, "tackles": 14, "dint": 1, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0},
				{ "name": "Orange Team", "rec": 12, "rtd": 2, "tackles": 10, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0},
				{ "name": "Yellow Team", "rec": 13, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0 },
				{ "name": "Black Team", "rec": 14, "rtd": 2, "tackles": 6, "dint": 0, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1},
				{ "name": "White Team", "rec": 15, "rtd": 2, "tackles": 4, "dint": 0, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1},
				{ "name": "Red Team", "rec": 16, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 10, "ptd": 0, "pint": 1}
			];
		}	

})();