const dotenv = require('dotenv');

dotenv.config({path: './src/.env'});

module.exports = {
	local: {
		localUrlDatabase: process.env.MONGO_URI,
		secret: "password"
	},
};