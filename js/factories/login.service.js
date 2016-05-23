	(function () {
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



	})();