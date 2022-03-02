const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()


passport.serializeUser(function(user, done) {
    done(null, user);
  });


  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_ID}.apps.googleusercontent.com`,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:3002/google/callback"
  },


  async (accessToken, refreshToken, profile, done) =>  {

    return( profile, done)
  }
    // Finding and creating the user in the DB
    //   const user = await User.findById(profile.id); 
    //   if (user) {
    //     done(null, false);
    //   } else {
    //     let newUser = new User();
    //         newUser._id = profile.id
    //         newUser.name = profile.displayName
    //         newUser.avatar = profile.photos[0].value
    //        await newUser.save() 
    //     done(null, profile); 
    //   }
    // }
  
));