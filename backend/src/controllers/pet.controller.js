const authMiddleware = require('path/to/authMiddleware');
const Pet = require('path/to/PetModel');

exports.createPet = [authMiddleware, async (req, res) => {
    try {
        const { name, species, breed, age } = req.body;
        if (!name || !species || !breed || !age) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const offeringUser = req.userData._id
        const pet = await Pet.create({ name, species, breed, age, offeringUser });
        return res.status(201).json(pet);

    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while creating Pet' });
    }
}];