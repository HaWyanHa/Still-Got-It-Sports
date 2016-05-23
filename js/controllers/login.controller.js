(function () {
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



})();