const express = require('express');

const Info = require('../models/info')
const router = express.Router();


router.get('/', async (req, res) => {
  try {
     const info = await Info.find().populate(['infos']);

     return res.send({ info });
   } catch (err) {
     return res.status(400).send({ error: 'Error loading projects' });
   }
});

router.get('/:infoId', async (req, res) => {
  try {
    const info = await Info.findById(req.params.infoId).populate('infos');

    return res.send({ info });
  } catch (err) {
    return res.status(400).send({ error: 'Error loading project' });
  }
});

router.put('/:infoId', async (req, res) => {
  try {
    const { info } = req.body;

    const new_info = await Info.findByIdAndUpdate(req.params.infoId, {
      info
    }, { new: true });


    await new_info.save();

    return res.send({ new_info });
  } catch (err) {
    return res.status(400).send({ error: 'Error updating project' });
  }
});

router.delete('/:infoId', async (req, res) => {
  try {
    await Info.findByIdAndRemove(req.params.infoId);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: 'Error deleting info' });
  }
});

router.post('/create_info', async (req, res) => {
  try {
    const { info } = req.body;
    if (await Info.findOne({ info }))
      return res.status(400).send({ error: 'Info already exists' });

    const new_info = await Info.create(req.body);


    return res.send({
      new_info,
    });
  } catch (err) {
    return res.status(400).send({ error: 'Failed to save info' });
  }
});

module.exports = app => app.use('/info', router);
