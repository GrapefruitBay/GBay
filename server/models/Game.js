var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
    type: String,
    title: String,
    manufacturer: String,
    tags: [String],
    genre: String,
    price: Number,
    quantity: Number,
    description: String,
    reviews: [{
        author: String,
        content: String,
        rating: Number
    }],
    imageUrl: String
});

var Game = mongoose.model('Game', gameSchema);

module.exports.seedInitialGames = function() {
    Game.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find game: ' + err);
            return;
        }

        if (collection.length === 0) {
            Game.create({type: 'constructor',
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
                imageUrl: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/8/0871772002529.jpg'});
        }
    });
};
