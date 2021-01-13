
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose= require('mongoose');
const keys = require('../config/keys');



const User = mongoose.model('users');

passport.serializeUser((user, done) =>{ // seialize takes user and returns a cookie
    done(null, user.id)                        // id comes form mongo not profile id form google
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user) =>{
        done(null, user)
    })

});

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // without this heroku redirects you to an http url giving an error
    }, async (accessToken,refreshToken, profile, done) => {
        const user = await User.findOne({googleId: profile.id})
            if (user){
               done(null, user)
            }else {
               const user = await new User({googleId: profile.id}).save();
              done(null, user)
            }
         
    })
 )