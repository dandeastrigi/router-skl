const mongoose = require('../../database');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    info: {
        type: String,
    },
    document: {
        type: String,
        require: true,
    },
    externalId: {
        type: String,
    }
});

PatientSchema.pre('save', async function(next) {
    next();
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
