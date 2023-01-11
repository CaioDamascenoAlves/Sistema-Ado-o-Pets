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