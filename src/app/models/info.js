const mongoose = require('../../database');

const InfoSchema = new mongoose.Schema({
  info: {
    type: String,
    require: true,
  },
});

InfoSchema.pre('save', async function(next) {
  next();
});

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
