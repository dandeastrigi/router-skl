const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apiskl', { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});
mongoose.Promise = global.Promise;

module.exports = mongoose
