(function () {
	"use strict";

	angular.module("football", ["ui.router"])  //built by someone else using state.go()
		.config(foo);   //config file is how UI finds what to do

	foo.$inject = ['$stateProvider', '$urlRouterProvider'];   //why?


	    function foo($stateProvider, $urlRouterProvider) {

	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	            .state('home', {
	                url: '/'
	            })
	            .state('login', {
	                url: '/login',
	                templateUrl: 'js/login/login.html'
	            }),

	        $stateProvider
	        	.state("stat", {
	        		url: "/stat",
	        		templateUrl: 'js/stat/stat.html'
	        	}),

	        $stateProvider
	        	.state("teams", {
	        		url: "/teams",
	        		templateUrl: "js/html/teams.html"
	        	});
	    }


//*********Facebook SDK************************
	// window.fbAsyncInit = function() {
	//     FB.init({
	//       appId      : '1003690163012170',
	//       xfbml      : true,
	//       version    : 'v2.6'
	//     });
	//   };

	//   (function(d, s, id){
	//      var js, fjs = d.getElementsByTagName(s)[0];
	//      if (d.getElementById(id)) {return;}
	//      js = d.createElement(s); js.id = id;
	//      js.src = "//connect.facebook.net/en_US/sdk.js";
	//      fjs.parentNode.insertBefore(js, fjs);
	//    }(document, 'script', 'facebook-jssdk'));
//************************************************

})();


