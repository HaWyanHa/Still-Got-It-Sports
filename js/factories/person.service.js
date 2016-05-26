(function () {
	"use strict";

	angular.module("football")
		.factory("PersonService", PersonService);


		function PersonService() {

			var all = [
				{ "team": "Green Team (W 16-14)", "rec": 11, "rtd": 3, "tackles": 14, "dint": 1, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0},
				{ "team": "Orange Team (L 26-34)", "rec": 12, "rtd": 2, "tackles": 10, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0},
				{ "team": "Yellow Team (W 17-14)", "rec": 13, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0 },
				{ "team": "Black Team (W 26-14)", "rec": 14, "rtd": 2, "tackles": 6, "dint": 0, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1},
				{ "team": "White Team (L 7-21)", "rec": 15, "rtd": 2, "tackles": 4, "dint": 0, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1},
				{ "team": "Red Team (W 12-7)", "rec": 16, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 10, "ptd": 0, "pint": 1}
			];

			return {
				all: all
			};

			
			

		}	

})();