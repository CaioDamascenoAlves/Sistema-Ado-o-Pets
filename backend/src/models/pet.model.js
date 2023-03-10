const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    adoptingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },
    offeringUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
