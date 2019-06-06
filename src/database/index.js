const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apiskl', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose
