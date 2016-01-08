var Book = require('mongoose').model('Book');

module.exports = {
    getAllCourses: function(req, res, next) {
        Book.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Courses could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getCourseById: function(req, res, next) {
        Book.findOne({_id: req.params.id}).exec(function(err, book) {
            if (err) {
                console.log('Course could not be loaded: ' + err);
            }

            res.send(book);
        })
    }
};
