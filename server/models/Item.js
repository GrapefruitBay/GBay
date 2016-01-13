var mongoose = require('mongoose');

var item = function () {
    var item = {};

    Object.defineProperty(item, 'init', {
        value: function () {
            this.type = String;
            this.title = String;
            this.manufacturer = String;
            this.tags = [String];
            this.price = Number;
            this.quantity = Number;
            this.description = String;
            this.reviews = [{
                author: String,
                content: String,
                rating: Number
            }];
            this.imageUrl = String;

            return this;
        }
    });

    return item;
};

var itemSchema = mongoose.Schema(item().init());
var Item = mongoose.model('Item', itemSchema);

module.exports = item;