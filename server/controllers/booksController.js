var Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: function (req, res, next) {
        var filterType = '',
            filterText = '',
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

                        res.render('booksList', {books: books});
                    })
                }
            }
        } else {
            Book.find({}).exec(function (err, books) {
                if (err) {
                    console.log('Books could not be loaded: ' + err);
                }

                res.render('booksList', {books: books});
            })
        }
    },
    getBookById: function (req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function (err, book) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            res.render('bookDetails', {book: book});
        })
    },
    createBook: function (req, res, next) {
        var newBookData = req.body;
        Book.create(newBookData, function (err, book) {
            if (err) {
                console.log('Failed to create new book: ' + err);
                return;
            }

            res.render('addBooks', {book: books});
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
    deleteBook: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {
            var updatedBookData = req.body;
        }
    }
};
