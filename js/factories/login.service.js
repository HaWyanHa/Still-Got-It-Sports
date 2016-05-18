(function () {
	"use strict";

	angular.module("football")
		.factory("LoginService", LoginService);


		function LoginService () {
	 		var profilePic = "";
	 		var name = "";

	 		return {
				login: login,
				userData: userData
			};

			function login(callback){
				FB.login(function(loginResponse){
					console.log(loginResponse);
					// console.log(loginResponse.authResponse);
 

					FB.api(
					    "/" + loginResponse.authResponse.userID + "?fields=id,name,picture",
					    function (userResponse) {
					      if (userResponse && !userResponse.error) {
					        /* handle the result */
					    

					        name = userResponse.name;
					        // console.log(name);

					        profilePic = userResponse.picture.data.url;
					        // console.log(profilePic);

					        callback(name, profilePic);
					       
					      }
					    }
					);
				});

			}

			function userData() {
				return {
					name: name,
					profilePic: profilePic
				};
			}


		}



})();