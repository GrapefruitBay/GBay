var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    type: String,
    title: String,
    director: String,
    stars: [String],
    published: Number,
    tags: [String],
    genres: [String],
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

var Movie = mongoose.model('Movie', moviesSchema);

module.exports.seedInitialMovies = function() {
    Movie.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find movie: ' + err);
            return;
        }

        if (collection.length === 0) {
            Movie.create({type: 'movie',
                title: 'Star Wars Episode VII: The Force Awakens',
                director: 'J.J. Abrams',
                stars: ['Harrison Ford', 'Daisy Ridley', 'Adam Driver', 'John Boyega'],
                published: 2015,
                genres: ['Fantasy'],
                tags: ['jedi', 'Fantasy'],
                price: 35.45,
                quantity: 200,
                description: 'Fail',
                reviews: [{
                    author: 'Penka Jelyzkova',
                    content: 'Failva moshtno',
                    rating: 4
                }],
                imageUrl: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster-691x1024.jpg'});
            console.log('movie added');
        }
    });
};