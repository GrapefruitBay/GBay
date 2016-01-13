var Stationery = require('mongoose').model('Stationery');

module.exports = {
    getAllStationeries: function (req, res, next) {
        var filterType = '',
            maxPrice = 0;

        if (req.query.filtertext) {
            filterType = req.query.filtertype;
            var filterText = new RegExp(req.query.filtertext, 'i');

            if (filterType === 'title') {
                if (req.query.maxprice) {
                    maxPrice = req.query.maxprice;

                    Stationery.find({price: {$lt: maxPrice}}, {title: filterText}).exec(function (err, stationeries) {
                        if (err) {
                            console.log('Stationeries could not be loaded: ' + err);
                        }

                        res.render('stationeriesList', {stationeries: stationeries});
                    })
                } else {
                    Stationeries.find({title: filterText}).exec(function (err, stationeries) {
                        if (err) {
                            console.log('Stationeries could not be loaded: ' + err);
                        }

                        res.render('stationeriesList', {stationeries: stationeries});
                    })
                }
            } else {
                if (req.query.maxprice) {
                    maxPrice = req.query.maxprice;

                    Stationery.find({price: {$lt: maxPrice}}, {author: filterText}).exec(function (err, stationeries) {
                        if (err) {
                            console.log('Stationeries could not be loaded: ' + err);
                        }

                        res.render('stationeriesList', {stationeries: stationeries});
                    })
                } else {
                    Stationery.find({author: filterText}).exec(function (err, stationeries) {
                        if (err) {
                            console.log('Stationeries could not be loaded: ' + err);
                        }

                        res.render('stationeries/stationeriesList', {stationeries: stationeries});
                    })
                }
            }
        } else {
            Stationery.find({}).exec(function (err, stationeries) {
                if (err) {
                    console.log('Stationeries could not be loaded: ' + err);
                }

                res.render('stationeries/stationeries-list', {stationeries: stationeries});
            })
        }
    },
    getStationeryById: function (req, res, next) {
        Stationery.findOne({_id: req.params.id}).exec(function (err, stationery) {
            if (err) {
                console.log('Stationery could not be loaded: ' + err);
            }

            res.render('stationeries/stationery-details', {stationery: stationery});
        })
    },
    createStationery: function (req, res, next) {
        var newStationeryData = req.body;
        Stationery.create(newStationeryData, function (err, stationery) {
            if (err) {
                console.log('Failed to create new stationery: ' + err);
                return;
            }

            res.render('stationeries/stationery-publish', {stationery: stationery});
        })
    },
    updateStationery: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {
            var updatedStationeryData = req.body;

            Stationery.update({_id: req.body._id}, updatedStationeryData, function () {
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
            Stationery.findOneAndUpdate({_id: req.body._id}, {$push: {reviews: review}}, {
                safe: true,
                upsert: true
            }, function () {
                res.render('stationeries/stationery-review');
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    removeStationery: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {

            Stationery.remove(({_id: req.params.id}), function () {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    }
};