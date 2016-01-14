var mongoose = require('mongoose');
var item = require('./Item');

var book = function () {
    var book;

    book = Object.create(item);

    Object.defineProperty(book, 'init', {
        value: function () {
            item().init.call(this);

            this.author = String;
            this.ISBN = Number;
            this.published = Number;

            return this;
        }
    });

    return book;
};

var bookSchema = mongoose.Schema(book().init());
var Book = mongoose.model('Book', bookSchema);

module.exports.seedInitialBooks = function () {
    Book.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find book: ' + err);
            return;
        }

        if (collection.length === 0) {
            Book.create({
                type: 'book',
                title: 'Lord Of The Rings',
                author: 'AZ',
                ISBN: 9780261103566,
                published: 2000,
                genres: ['Fantasy'],
                tags: ['hobbits', 'Fantasy'],
                price: 123.45,
                quantity: 10,
                description: 'Mnogo yako',
                reviews: [{
                    author: 'Az',
                    content: 'Alabala',
                    rating: 5
                }],
                imageUrl: 'https://www.orangecenter.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780261103566.jpg'
            });
            console.log('book added');
        }
    });
};
