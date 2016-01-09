var Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: function(req, res, next) {
        Book.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getBookById: function(req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function(err, book) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            res.send(book);
        })
    }
};
