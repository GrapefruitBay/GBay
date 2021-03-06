var Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: function (req, res, next) {
        var filterType = '',
            maxPrice = Number.MAX_VALUE,
            sort = {};

        filterType = req.query.filtertype;
        var filterText = new RegExp(req.query.filtertext, 'i');
        console.log(filterType);
        if (filterType == "author") {
            sort = {author: -1};
        } else if (filterType == "title") {
            sort = {title: -1};
        }

        if (req.query.maxprice) {
            maxPrice = req.query.maxprice;
        }

        Book
            .find({price: {$lt: maxPrice}})
            .sort(sort).exec(function (err, books) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            res.render('books/books-list', {books: books});
        })
    },
    getBookById: function (req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function (err, book) {
            if (err) {
                console.log('Book could not be loaded: ' + err);
            }

            res.render('books/book-details', {book: book});
        })
    },
    createBook: function (req, res, next) {
        var newBookData = req.body;
        Book.create(newBookData, function (err, book) {
            if (err) {
                console.log('Failed to create new book: ' + err);
                return;
            }

            res.render('books/book-details', {book: book});
        })
    },
    updateBook: function (req, res, next) {
        var updatedBookData = req.body;
        updatedBookData.id = req.params.id;

        Book.update({_id: updatedBookData.id}, updatedBookData, function (err, data) {
            if (err) {

                return;
            }

            res.redirect('/');
        })
    },
    addComment: function (req, res, next) {
        if (req.user) {
            var review = req.body.review;
            Book.findOneAndUpdate({_id: req.body._id}, {$push: {reviews: review}}, {
                safe: true,
                upsert: true
            }, function () {
                res.render('books/book-review');
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    removeBook: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {

            Book.remove(({_id: req.params.id}), function () {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    }, getCreateBook: function (req, res, next) {
        res.render('books/book-publish');
    }, getEditBook: function (req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function (err, book) {
            if (err) {
                console.log('Failed to create new book: ' + err);
                return;
            }

            console.log(book);
            res.render('books/book-edit', {book: book});
        })
    }
};