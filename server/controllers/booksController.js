var Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: function (req, res, next) {
        var filterType = '',
            maxPrice = 0;

        if (req.query.filtertext) {
            filterType = req.query.filtertype;
            var filterText = new RegExp(req.query.filtertext, 'i');

            if (filterType === 'title') {
                if (req.query.maxprice) {
                    maxPrice = req.query.maxprice;

                    Book.find({price: {$lt: maxPrice}}, {title: filterText}).exec(function (err, books) {
                        if (err) {
                            console.log('Books could not be loaded: ' + err);
                        }

                        res.render('booksList', {books: books});
                    })
                } else {
                    Book.find({title: filterText}).exec(function (err, books) {
                        if (err) {
                            console.log('Books could not be loaded: ' + err);
                        }

                        res.render('booksList', {books: books});
                    })
                }
            } else {
                if (req.query.maxprice) {
                    maxPrice = req.query.maxprice;

                    Book.find({price: {$lt: maxPrice}}, {author: filterText}).exec(function (err, books) {
                        if (err) {
                            console.log('Books could not be loaded: ' + err);
                        }

                        res.render('booksList', {books: books});
                    })
                } else {
                    Book.find({author: filterText}).exec(function (err, books) {
                        if (err) {
                            console.log('Books could not be loaded: ' + err);
                        }

                        res.render('books/booksList', {books: books});
                    })
                }
            }
        } else {
            Book.find({}).exec(function (err, books) {
                if (err) {
                    console.log('Books could not be loaded: ' + err);
                }

                res.render('books/books-list', {books: books});
            })
        }
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

            res.render('books/book-publish', {book: book});
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
    }
};