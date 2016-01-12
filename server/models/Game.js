var mongoose = require('mongoose');
var item = require('./Item');

var game = function () {
    var game;

    game = Object.create(item);

    Object.defineProperty(game, 'init', {
        value: function () {
            item().init.call(this);

            this.genre = String;

            return this;
        }
    });

    return game;
};

var gameSchema = mongoose.Schema(game().init());
var Game = mongoose.model('Game', gameSchema);

module.exports.seedInitialGames = function () {
    Game.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find game: ' + err);
            return;
        }

        if (collection.length === 0) {
            Game.create({
                type: 'constructor',
                title: 'Geomag Color',
                manufacturer: 'Geomag',
                tags: ['magnet constructor', 'constructor', 'Geomag'],
                price: 77.45,
                quantity: 10,
                description: 'For kids over 6 years',
                reviews: [{
                    author: 'Az',
                    content: 'decka ral\'ta',
                    rating: 3
                }],
                imageUrl: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/8/0871772002529.jpg'
            });
        }
    });
};
