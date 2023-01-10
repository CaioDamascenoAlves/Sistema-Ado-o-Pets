const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userShema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	adopt: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pet'
	},
	adoptionOffers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Pet'
		}
	],

}, {
	timestamps: true,
	collection: 'users',
});

userShema.pre('save', async function (next){
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;

	next();
});

userShema.methods = {
	checkPassword: function (password) {
		return bcrypt.compare(password, this.password);
	},
	generateToken: function () {
		return jwt.sign(
			{ id: this._id },
			process.env.APP_SECRET, {
				expiresIn: 86400,
			});
	}
};

const User = mongoose.model('User', userShema);

module.exports = User;