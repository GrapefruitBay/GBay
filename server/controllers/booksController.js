var Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: function (req, res, next) {
        Book.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            //res.render('booksList', {books: books});
            res.send(collection);
        })
    },
    getBookById: function (req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function (err, book) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            //res.render('bookDetails', {book: book});
            res.send(book);
        })
    },
    createBook: function (req, res, next) {
        var newBookData = req.body;
        Book.create(newBookData, function (err, book) {
            if (err) {
                console.log('Failed to create new book: ' + err);
                return;
            }

            //res.render('addBooks', {book: books});
            res.send(book);
        })
    },
    updateBook: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {
            var updatedBookData = req.body;

            Book.update({_id: req.body._id}, updatedBookData, function () {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    }
};
