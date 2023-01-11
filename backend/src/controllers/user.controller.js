const User = require('../models/user.model');

// => Async e await 

//=> Método responsável para registrar um novo 'User'
exports.registerNewUser = async (req, res) => {
	try {
		let isUser = await User.find ({ email: req.body.email });
		console.log(isUser);

		if(isUser.length >= 1){
			return res.status(409).json({ message: 'Sorry! This email é already registered '})
		}

		const newUser = new User(req.body);
		const user = await newUser.save();
		const token = await newUser.generateAuthToken();
		res.status(201).json({ message: 'User created successfully!', user, token });
	} catch (err){
		res.status(400).json({ err: err })
	}
};

// ==> Método responsável por realizar um novo login 'User':
exports.loginUser = async (req, res) => {
	try {
	  const { email } = req.body;
	  const { password } = req.body;
	  const user = await User.findByCredentials(email, password);
	  if (!user) {
		return res.status(401).json({
		  error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
		});
	  }
	  const token = await user.generateAuthToken();
	  return res
		.status(201)
		.json({ message: "Usuário(a) logado com sucesso!", user, token });
	} catch (err) {
	  return res.status(400).json({ err });
	}
  };
  
  // ==> Método responsável por retornar um determinado 'User'
  exports.returnUserProfile = async (req, res) => {
	await res.json(req.userData);
  };