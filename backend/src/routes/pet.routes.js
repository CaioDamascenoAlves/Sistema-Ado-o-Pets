const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const petController = require('../controllers/pet.controller');

router.post('/pets', petController.createPet);

module.exports = router;