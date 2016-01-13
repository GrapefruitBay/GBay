var Game = require('mongoose').model('Game');

module.exports = {
    getAllGames: function (req, res, next) {
        Game.find({}).exec(function (err, games) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            res.render('games/games-list', {games: games});
        })
    },
    getGameById: function (req, res, next) {
        Game.findOne({_id: req.params.id}).exec(function (err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }
            
            res.render('games/game-details', {game: game});
        })
    },
    createGame: function (req, res, next) {
        var newGameData = req.body;
        Book.create(newGameData, function (err, game) {
            if (err) {
                console.log('Failed to create new game: ' + err);
                return;
            }

            res.render('games/game-publish', {game: game});
        })
    }
};
