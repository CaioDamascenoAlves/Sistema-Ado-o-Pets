const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const petController = require('../controllers/pet.controller');

// ==> Rota responsável por Criar um novo 'Pet': (POST): localhost:3000/api/v1/pets
router.post('/pets', auth, petController.createPet);

// ==> Rota responsável por Buscar todos os 'Pets': (GET): localhost:3000/api/v1/pets
router.get('/pets', auth, petController.getAllPets);

// ==> Rota responsável por Buscar um determinado 'Pet' por ID : (GET): localhost:3000/api/v1/pets/:id
router.get('/pets/:id', auth, petController.getPetById);

// ==> Rota responsável por Buscar um determinado 'Pets' pelo NAME: (GET): localhost:3000/api/v1/pets/nome/:nome
router.get('/pets/name/:name', auth, petController.getPetByName);

// ==> Rota responsável por Atualizar um determinado 'Pet' por ID: (PUT): localhost:3000/api/v1/pets/:id
router.put('/pets/:id', auth, petController.updatePetById);

// ==> Rota responsável por Deletar um determinado 'Pet' por ID: (DELETE): localhost:3000/api/v1/pets/:id
router.delete('/pets/:id', auth, petController.deletePetById);

module.exports = router;