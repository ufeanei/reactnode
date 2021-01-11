// nodejs uses commonjs module system of importing an exporting files
const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./config/keys')


const app = express()
passport.use(
   new GoogleStrategy({
     clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback'
   }, (accessToken,refreshToken, profile, done) => {
      console.log(accessToken)
      console.log(profile)
      console.log(refreshToken)

   })

)

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}))
app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/', (req, res) => {res.send('hello')})



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log('hi there'))
