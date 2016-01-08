var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
    type: String,
    title: String,
    author: String,
    published: Number,
    tags: [String],
    genre: String,
    price: Number,
    description: String,
    reviews: [{
        author: String,
        content: String,
        rating: Number
    }],
    imageUrl: String
});

var Book = mongoose.model('Book', booksSchema);

module.exports.seedInitialCourses = function() {
    Book.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find book: ' + err);
            return;
        }

        if (collection.length === 0) {
            Book.create({type: 'book',
                title: 'LOTR',
                author: 'AZ',
                published: 2000,
                genre: 'Fantasy',
                tags: ['hobbits'],
                price: 123.45,
                description: 'Mnogo yako',
                reviews: [{
                    author: 'Az',
                    content: 'Alabala'
                }],
                imageUrl: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780261103566.jpg'});
            }
    });
};
