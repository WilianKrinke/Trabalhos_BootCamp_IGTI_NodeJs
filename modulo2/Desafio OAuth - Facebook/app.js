const express         =     require('express')
  , passport          =     require('passport')
  , cookieParser      =     require('cookie-parser')
  , session           =     require('express-session')
  , bodyParser        =     require('body-parser')
  , config            =     require('./configuration/config')
  , configFacebook    =     require('./configuration/configFacebook')
  , app               =     express();

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FaceBookStrategy = require('passport-facebook').Strategy

passport.use(new GoogleStrategy({
    clientID: config.api_key,
    clientSecret: config.api_secret,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.use(new FaceBookStrategy({
    clientID: configFacebook.api_key,
    clientSecret: configFacebook.api_secret,
    callbackURL: configFacebook.callback_url,
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
))

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google',  { successRedirect : '/page1', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook',  { successRedirect : '/page1', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/page1', (req, res, next) => {
  res.render('page1');
})

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => console.log('Server up'));