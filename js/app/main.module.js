(function () {
	"use strict";

	angular.module("football", ["ui.router", "firebase"])  //built by someone else using state.go()
		.config(footballConfig)  //config file is how UI finds what to do
		.run(footballInit);


	footballConfig.$inject = ['$stateProvider', '$urlRouterProvider'];  


	    function footballConfig($stateProvider, $urlRouterProvider) {

	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	            .state('home', {
	                url: '/',
	                templateUrl: "html/home.html",
	                controller: "LoginController",
	                controllerAs: "lc"
	            })	        
	        	.state("account", {
	        		url: "/account",
	        		templateUrl: 'html/account.html',
	        		controller: "LoginController",
	        		controllerAs: "lc"
	        	})
    
	        	.state("teams", {
	        		url: "/teams",
	        		templateUrl: "html/teams.html",
	        		controller: "TeamController",
	        		controllerAs: "tm"
	        	})

	       		.state("players", {
	       			url: "/players",
	       			templateUrl: "html/players.html",
	       			controller: "StatController",
	       			controllerAs: "stuff"
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


