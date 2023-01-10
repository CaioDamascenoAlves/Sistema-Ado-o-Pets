const User = require('../models/user.model');

//=> Método responsável para registrar um novo 'User'
exports.registerNewUser = async (req, res) => {
	try{
		let isUser = await User.find({ email:req.body.email });
		console.log(isUser);

		if(isUser.length >= 1){
			return res.status(409).json({ 
				message: 'Oops! Esse email ja esta registrado'
			});
		}

		const newUser = new User(req.body);
		const user = await newUser.save();
		const token = await newUser.generateToken();
		res.status(201).json({ 
			message: 'Usuario criado com sucesso!', user, token
		});
	} catch(err){
		res.status(400).json({ err: err })
	}
};

// ==> Método responsável por realizar um novo login 'User':
exports.loginUser = async (req, res) => {
	try {

	} catch(err){
		
	}
}