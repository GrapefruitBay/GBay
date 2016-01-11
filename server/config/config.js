var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        //db: 'mongodb://localhost/grapefruit',
        db: 'mongodb://team21:telerik@ds035985.mongolab.com:35985/grapefruit',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://team21:telerik@ds035985.mongolab.com:35985/grapefruit',
        port: process.env.PORT || 3030
    }
}