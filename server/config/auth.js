var passport = require('passport');

module.exports = {
    login: function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user) {
            if (err) return next(err);
            if (!user) {
                res.send({success: false})
            }

            if (user.roles == 'banned') {
                console.log('banned');
                res.send({success: false});
            }else{
                req.logIn(user, function(err) {
                    if (err) return next(err);
                    res.send({success: true, user: user});
                })
            }
        });

        auth(req, res, next);
    },
    logout: function(req, res, next) {
        req.logout();
        res.end();
    },
    isAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            res.status(403);
            res.render('../views/unauthorized/unauthorized');
            res.end();
        }
        else {
            next();
        }
    },
    isInRole: function(role) {
        return function(req, res, next) {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next();
            }
            else {
                console.log("U are not an admin");
                res.status(403);
                res.render('../views/unauthorized/unauthorized');
                res.end();
            }
        }
    }
}