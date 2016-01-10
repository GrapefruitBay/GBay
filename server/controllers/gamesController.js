var Game = require('mongoose').model('Game');

module.exports = {
    getAllGames: function(req, res, next) {
        Game.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getGameById: function(req, res, next) {
        Game.findOne({_id: req.params.id}).exec(function(err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            res.send(game);
        })
    }
};
