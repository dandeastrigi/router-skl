const mongoose = require('../../database');

const InfoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  type: {
    type: String,
  },
  info: {
    type: String,
    require: true,
  },
  externalId: {
    type: String,
  }
});

InfoSchema.pre('save', async function(next) {
  next();
});

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
