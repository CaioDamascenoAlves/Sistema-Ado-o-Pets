const dotenv = require('dotenv');

dotenv.config({path: './src/.env'});


module.exports = {
	local: {
		localUrlDatabse: process.env.MONGO_URI,
		secret: "password",
	},
};