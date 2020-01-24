const express = require('express');

const Patient = require('../models/patient');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const patient = await Patient.find().populate(['patients']);

        return res.send({ patient });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects' });
    }
});

router.get('/:patientId', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId).populate('patients');

        return res.send({ patient });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading project' });
    }
});

router.put('/:patientId', async (req, res) => {
    try {
        const { patient } = req.body;

        const new_patient = await Patient.findByIdAndUpdate(req.params.patientId, {
            patient
        }, { new: true });


        await new_patient.save();

        return res.send({ new_patient });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating project' });
    }
});

router.delete('/:patientId', async (req, res) => {
    try {
        await Patient.findByIdAndRemove(req.params.patientId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting patient' });
    }
});

router.post('/create_patient', async (req, res) => {
    try {
        const  patient  = req.body;
        console.log(await Patient.findOne(req.body))
        if (await Patient.findOne( patient ))
            return res.status(400).send({ error: 'Patient already exists' });

        const new_patient = await Patient.create(req.body);


        return res.send({
            new_patient,
        });
    } catch (err) {
        return res.status(400).send({ error: 'Failed to save patient', err: err });
    }
});

module.exports = app => app.use('/patient', router);
