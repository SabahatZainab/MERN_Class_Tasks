const password = require('password')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt; //extract token
const User = require('../models/User');
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({email: jwt_payload.email, password: jwt_payload.password}, function(err, user) {
        if (err) {
            //Error
            return done(err, false);
        }
        if (user) {
            //Authenticate
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));