(function () {
	"use strict";

	angular.module("football", ["ui.router"])  //built by someone else using state.go()
		.config(footballConfig)  //config file is how UI finds what to do
		.run(footballInit);


	footballConfig.$inject = ['$stateProvider', '$urlRouterProvider'];   //why?


	    function footballConfig($stateProvider, $urlRouterProvider) {

	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	            .state('home', {
	                url: '/',
	                templateUrl: "html/home.html",
	                controller: "LoginController",
	                controllerAs: "lc"
	            })	        
	        	.state("stat", {
	        		url: "/stat",
	        		templateUrl: 'stat/stat.html'
	        	})
    
	        	.state("teams", {
	        		url: "/teams",
	        		templateUrl: "html/teams.html"
	        	})
	       
	        	.state("schedule", {
	        		url: "/schedule",
	        		templateUrl: "html/schedule.html"
	        	})
	     
	        	.state("contact", {
	        		url: "/contact",
	        		templateUrl: "html/contact.html"
	        	});
	    }

function footballInit(){
// *********Facebook SDK************************	

	    FB.init({
	      appId      : '1003690163012170',
	      xfbml      : true,
	      version    : 'v2.6'
	    });

// ************************************************
}

})();


