const mongoose = require('mongoose');
const database = require('./db.config');

mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
	console.log('A Base de dados foi conectada com sucesso!');
},(err) => {
	console.log(`Erro ao conectar com a Base de dados...: ${err}`);
	process.exit();
})