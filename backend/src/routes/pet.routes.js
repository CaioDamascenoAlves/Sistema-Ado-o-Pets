const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const petController = require('../controllers/pet.controller');

// ==> Rota responsável por Criar um novo 'Pet': (POST): localhost:3000/api/v1/pets
router.post('/pets', auth, petController.createPet);

// ==> Rota responsável por Buscar todos os 'Pets': (POST): localhost:3000/api/v1/pets
router.get('/pets', auth, petController.getAllPets);

// ==> Rota responsável por Buscar todos os 'Pets': (POST): localhost:3000/api/v1/pets/:id
router.get('/pets/:id', auth, petController.getPetById);

module.exports = router;