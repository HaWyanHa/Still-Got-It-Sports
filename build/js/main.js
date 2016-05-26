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
	        		controller: "TeamController",
	        		controllerAs: "tm"
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
	     		.state("admin", {
	     			url:"/admin",
	     			templateUrl: "html/admin.html",
	     			controller: "StatController",
	     			controllerAs: "stuff"
	     		})
	     		.state("player", {
	     			url: "/player",
	     			templateUrl: "html/player.html"
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


;(function () {
	"use strict";

	angular.module("football")
		.controller("LoginController", LoginController);

	LoginController.$inject = ["$state", "LoginService", "$firebaseAuth"];

	function LoginController($state, LoginService, $firebaseAuth) {
		
		this.login = function login(){
			return LoginService.login()
				.then(function(){
					console.log("you're in");
				})
				.catch(function(){
					console.log("you're not in");
				});
		};
		// var ref = new Firebase(firebaseUrl);
		// var authObject = $firebaseAuth(ref);

		// var that = this;
		// that.isLoggedin = false;

		// init();

		// function init() {
		// 	authObject.$onAuth(authDataCallback);
		// 		if(authObject.$getAuth()){
		// 			that.isLoggedin = true;
		// 		}
		// }

	// 	function authDataCallback(dataCallback) {
	// 		if (authData) {
	// 			that.isLoggedin = true;
	// 			var user = $firebaseObject(ref.child("users").child(authData.uid));
	// 			user.$loaded().then(function(){});
	// 		}
	// 	}

	// 	this.login = function login() {
	// 		LoginService.login(function(name, profilePic){
	// 			console.log(name, profilePic);
	// 			that.userData.profilePic = profilePic;
	// 			that.userData.name = name;
	// 		});
	// 	// $state.go("account");
			
	// 	};

		
	// 	this.userData = LoginService.userData();	
	}



})();;(function () {
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

		this.seasonPoints = function seasonPoints(stat) {
			var total = 0;
			this.person.forEach(function(element){
				console.log(element, stat, element[stat]);
				total = total + element[stat];

			}); 
			return total;
		};
	}
})();;(function () {
	"use strict";


	angular.module("football")
		.controller("StatController", StatController);


		StatController.$inject = ["PlayerService"];

		function StatController(PlayerService) {
			this.player = PlayerService.allPlayers;

			this.addPoints = function addPoints(player){
				var rec = player.rec;
				var rtd = player.rtd;
				var tackles = player.tackles;
				var dint = player.dint;
				var dtd = player.dtd;
				var comp = player.comp;
				var ptd = player.ptd;
				var pint = player.pint;

				if (player.gender === "female") {
					return rec + (rtd * 7) + tackles + (dint * 10) + (dtd * 10) + comp + (ptd * 5) - (pint * 3);
				} else {
					return rec + (rtd * 5) + tackles + (dint * 5) + (dtd * 7) + comp + (ptd * 3) - (pint * 3);
				}
			};

			this.sortType = this.addPoints;
			this.sortReverse = true;
			this.searchPlayer = "";
			this.playerName = "";
			
			this.recPoints = function recPoints(player) {

				if (player.gender === "female") {
					return player.rec + (player.rtd * 7);
				} else {
					return player.rec + (player.rtd * 5);
				}
			};

			this.defPoints = function defPoints(player) {

				if (player.gender === "female") {
					return player.tackles + (player.dint * 7) + (player.dtd * 10);
				} else {
					return player.tackles + (player.dint * 5) + (player.dtd * 7);
				}
			};

			this.pasPoints = function pasPoints(player) {
				if (player.gender === "female") {
					return player.comp + (player.ptd * 5) - (player.pint * 3);
				} else {
					return player.comp + (player.ptd * 3) - (player.pint * 3);
				}
			};

			this.newPlayer = function newPlayer (playerForm) {
				console.log(playerForm);
				PlayerService.createPlayer(this.playerName, this.gender)
					.then(function(){
						alert("new player added");
					})
					.catch(function(){
						alert("something went wrong");
					});
				this.playerName="";
				this.gender="";
			};

			this.editPlayer = function editPlayer(playerStats) {
				console.log("saving player info", playerStats);
				PlayerService.savePlayer(playerStats)
					.then(function(){
						alert("saving player info");
					}) 
					.catch(function(){
						alert("did not save");
					});
			};

			this.removePlayer = function removePlayer(playerStats){
				console.log("hello");
				PlayerService.deletePlayer(playerStats)
					.then(function(){
						alert("player deleted");
					})
					.catch(function(){
						alert("could not delete player");
					});
			};


		}

})();;(function () {
	"use strict";

	angular.module("football")
		.controller("TeamController", TeamController);


		TeamController.$inject = ["TeamService"];

		function TeamController(TeamService) {


			console.log('in TeamController');
			this.team = TeamService.getAllTeams;
			this.first = TeamService.getAllTeams[0];

			this.gamesBehind = function gamesBehind(team){
				console.log(this.first, team);
				return ((this.first.wins - team.wins) + (team.loss - this.first.loss))/2;
			};

		}

})();;	(function () {
		"use strict";

		angular.module("football")
			.factory("LoginService", LoginService);

			      LoginService.$inject = ['$firebaseAuth'];

			function LoginService($firebaseAuth) {
		 	
		 		var ref = new Firebase("https://fiery-torch-4227.firebaseio.com");
		 		var userData = null;
				return {
					login: login,
					userData: userData
				};


			function login(){
				return ref.authWithOAuthPopup("facebook")
					.then(function(authData) {
						console.log(authData);
						userData = authData;
						return userData;
					});
			}
			
	 	//  	if (error) {
	  //   	console.log("Login Failed!", error);
	  // 		} else {
	  //   	console.log("Authenticated successfully with payload:", authData);
	  // 		}
			// });











		 // 		var profilePic = "";
		 // 		var name = "";

		 // 		return {
			// 		login: login,
			// 		userData: userData
			// 	};

			// 	function login(callback){
			// 		FB.login(function(loginResponse){
			// 			console.log(loginResponse);
			// 			// console.log(loginResponse.authResponse);
	 

			// 			FB.api(
			// 			    "/" + loginResponse.authResponse.userID + "?fields=id,name,picture",
			// 			    function (userResponse) {
			// 			      if (userResponse && !userResponse.error) {
			// 			        /* handle the result */
						    

			// 			        name = userResponse.name;
			// 			        // console.log(name);

			// 			        profilePic = userResponse.picture.data.url;
			// 			        // console.log(profilePic);

			// 			        callback(name, profilePic);
						       
			// 			      }
			// 			    }
			// 			);
			// 		});

			// 	}

			// 	function userData() {
			// 		return {
			// 			name: name,
			// 			profilePic: profilePic
			// 		};
			// 	}


			}



	})();;(function () {
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

})();;(function () {
	"use strict";

	angular.module("football")
		.factory("PlayerService", PlayerService);

		PlayerService.$inject = ["$firebaseArray", "$firebaseObject"];

		// var players = [
		// 	{ "name": "Ryan", "rec": 11, "rtd": 3, "tackles": 14, "dint": 1, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Alex", "rec": 12, "rtd": 2, "tackles": 10, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 1, "gender": "male" },
		// 	{ "name": "Liz", "rec": 13, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 0, "ptd": 0, "pint": 0, "gplay": 0, "gender": "female"  },
		// 	{ "name": "Sam", "rec": 14, "rtd": 2, "tackles": 6, "dint": 0, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Jordan", "rec": 15, "rtd": 2, "tackles": 4, "dint": 0, "dtd": 0, "comp": 10, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Matt", "rec": 16, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 10, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Noelle", "rec": 17, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 1, "comp": 18, "ptd": 0, "pint": 1, "gplay": 1, "gender": "female"  },
		// 	{ "name": "Bo", "rec": 18, "rtd": 2, "tackles": 4, "dint": 1, "dtd": 0, "comp": 11, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Russ", "rec": 19, "rtd": 2, "tackles": 8, "dint": 1, "dtd": 0, "comp": 17, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Nadia", "rec": 22, "rtd": 2, "tackles": 9, "dint": 0, "dtd": 0, "comp": 16, "ptd": 1, "pint": 1, "gplay": 1, "gender": "female"  },
		// 	{ "name": "Steve", "rec": 23, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 15, "ptd": 6, "pint": 1, "gplay": 1, "gender": "male" },
		// 	{ "name": "Su", "rec": 10, "rtd": 2, "tackles": 6, "dint": 1, "dtd": 0, "comp": 10, "ptd": 1, "pint": 1, "gplay": 1, "gender": "female" },
		// 	{ "name": "Mike", "rec": 34, "rtd": 2, "tackles": 7, "dint": 0, "dtd": 0, "comp": 19, "ptd": 0, "pint": 1, "gplay": 1, "gender": "male"  },
		// 	{ "name": "Dana", "rec": 10, "rtd": 2, "tackles": 5, "dint": 0, "dtd": 0, "comp": 13, "ptd": 2, "pint": 1, "gplay": 1, "gender": "male"  }
		// ];

		function PlayerService ($firebaseArray, $firebaseObject){
			var playersLink = new Firebase("https://fiery-torch-4227.firebaseio.com/");
			var players = $firebaseArray(playersLink);

			return {
				allPlayers: players,
				createPlayer: createPlayer,
				savePlayer: savePlayer,
				deletePlayer: deletePlayer
			};

			function createPlayer(playerName, gender) {
				return players.$add({name: playerName, rec: 0, rtd: 0, tackles: 0, dint: 0, dtd: 0, comp: 0, ptd: 0, pint: 0, gplay: 0, gender: gender});
			}

			function savePlayer(playerStats){
				var playerObject = new Firebase("https://fiery-torch-4227.firebaseio.com/" + playerStats.$id);
				return playerObject.update({"rec": playerStats.rec, "rtd": playerStats.rtd, "tackles": playerStats.tackles, "dint": playerStats.dint, "dtd": playerStats.dtd, "comp": playerStats.comp, "ptd": playerStats.ptd, "pint": playerStats.pint, "gplay": playerStats.gplay});
			}

			function deletePlayer(playerStats) {
				console.log(playerStats);
				var playerObject = new Firebase("https://fiery-torch-4227.firebaseio.com/" + playerStats.$id);
				return $firebaseObject(playerObject).$remove();
			}
		}



})();;(function () {
	"use strict";

	angular.module("football")
		.factory("TeamService", TeamService);

		var teams = [
			{ "color": "Blue", "wins": 10, "loss": 2, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Red", "wins": 9, "loss": 3, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Green", "wins": 8, "loss": 4, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "White", "wins": 7, "loss": 5, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Black", "wins": 6, "loss": 6, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Yellow", "wins": 5, "loss": 7, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Purple", "wins": 3, "loss": 9, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  },
			{ "color": "Orange", "wins": 2, "loss": 10, "pf": 243, "pa": 230, "streak": "W5", "opp": "22-26"  }
		];

		function TeamService (){
			return {
				getAllTeams: teams
			};
		}

		

})();;(function () {
	"use strict";	

	angular.module("football")
		.controller("example", example);

		example.$inject = ["$firebaseArray"];
		
		function example ($firebaseArray){

		}


})();
;jQuery(document).ready(function(){

	jQuery(".menu-trigger").click(function(){

		jQuery(".nav-menu").slideToggle(400, function(){
			jQuery(this).toggleClass("nav-expanded").css('display', '');
		});
	});

});
//# sourceMappingURL=main.js.map