var mongoose = require('mongoose');
var item = require('./Item');

var stationery = function () {
    var stationery;

    stationery = Object.create(item);

    Object.defineProperty(stationery, 'init', {
        value: function () {
            item().init.call(this);

            this.manufacturer = String;
            this.productCode = String;
            this.category = String;

            return this;
        }
    });

    return stationery;
};

var stationerySchema = mongoose.Schema(stationery().init());
var Stationery = mongoose.model('Stationery', stationerySchema);

module.exports.seedInitialStationeries = function () {
    Stationery.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find stationery: ' + err);
            return;
        }

        if (collection.length === 0) {
            Stationery.create({
                type: 'stationery',
                title: 'Canon LS-100TS 10 Digit Tax Calculator',
                manufacturer: 'Sony',
                productCode: 'CALS100TS',
                price: 27.98,
                quantity: 20,
                description: 'Best calc in the World',
                reviews: [{
                    author: 'Az',
                    content: 'Ne sum polzval po hubav calc ot vremeto na Chingis Han',
                    rating: 5
                }],
                imageUrl: 'http://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/CALS100TS_canon_canon_ls100ts_desktop_tax_cal_grey.jpg',
                category: 'Office supplies'
            });
            console.log('stationery added');
        }


    });
};