(function () {
	"use strict";

	angular.module("football")
		.controller("PersonController", PersonController);

	PersonController.$inject = ["PersonService"];

	function PersonController(PersonService){
		this.person = PersonService.all;
	

		this.calculatePoints = function calculatePoints(person){
			var rec = person.rec;
			var rtd = person.rtd;
			var tackles = person.tackles;
			var dint = person.dint;
			var dtd = person.dtd;
			var comp = person.comp;
			var ptd = person.ptd;
			var pint = person.pint;

					
			return rec + (rtd * 5) + tackles + (dint * 5) + (dtd * 7) + comp + (ptd * 3) - (pint * 3);
			
		};
	}
})();