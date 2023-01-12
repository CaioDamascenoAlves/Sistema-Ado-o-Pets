const Pet = require('../models/pet.model');
const checkAuth = require('../middlewares/auth');


exports.createPet = async (req, res) => {
    checkAuth(req, res, async () => {
    try {
        const { name, species, breed, age } = req.body;
        if (!name || !species || !breed || !age) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // adding the offering user field with the user id that is doing the request
        const newPet = new Pet({ name, species, breed, age, offeringUser: req.userData._id });
        await newPet.save();
        return res.status(201).json({ message: 'Pet created successfully!', pet: newPet });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while creating Pet' });
    }
  });
};

exports.getAllPets = async (req, res) => {
  checkAuth(req, res, async () => {
      try {
        const pets = await Pet.find();
        return res.status(200).json({ pets });
      } catch (err) {
        return res.status(500).json({ error: 'An error occurred while retrieving pets' });
    }
  });
};

exports.getPetById = async (req, res) => {
  checkAuth(req, res, async () => {
    try {
      const pet = await Pet.findById(req.params.id);
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      return res.status(200).json({ pet });
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred while retrieving pet' });
    }
  });
};

exports.getPetByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pet = await Pet.findOne({ name });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json({ pet });
  } catch (err) {
    res.status(500).json({ err });
  }
};