const Pet = require('../models/pet.model');

exports.createPet = async (req, res) => {
    try {
        const { name, species, breed, age, adoptingUser, offeringUser } = req.body;
        if (!name || !species || !breed || !age || !adoptingUser || !offeringUser) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const newPet = new Pet({ name, species, breed, age, adoptingUser, offeringUser });
        await newPet.save();
        return res.status(201).json({ message: 'Pet created successfully!', pet: newPet });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while creating Pet' });
    }
};