var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
    type: String,
    title: String,
    author: String,
    ISBN: Number,
    published: Number,
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

var Book = mongoose.model('Book', booksSchema);

module.exports.seedInitialBooks = function() {
    Book.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find book: ' + err);
            return;
        }

        if (collection.length === 0) {
            Book.create({type: 'book',
                title: 'LOTR',
                author: 'AZ',
                ISBN: 9780261103566,
                published: 2000,
                genre: 'Fantasy',
                tags: ['hobbits'],
                price: 123.45,
                quantity: 10,
                description: 'Mnogo yako',
                reviews: [{
                    author: 'Az',
                    content: 'Alabala',
                    rating: 5
                }],
                imageUrl: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780261103566.jpg'});
            }
    });
};
