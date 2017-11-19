passport.use('login', new LocalStrategy({
			passReqToCallback : true
		},
		function(req, username, password, done) { 

			if(users[username]){
				console.log('User Not Found with username '+username);
				return done(null, false);
			}

			if(isValidPassword(users[username], password)){
				//sucessfully authenticated
				return done(null, users[username]);
			}
			else{
				console.log('Invalid password '+username);
				return done(null, false)
			}
		}
	));
