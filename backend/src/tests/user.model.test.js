const bcrypt = require('bcrypt');
const User = require('../models/user.model');

describe('User model', () => {
	it('should hash the password before saving', async () => {
		const user = new User({
			name: 'Caio Damasceno',
			email: 'caio@exemplo.com',
			password: '123456',
			adress: 'João Monlevade',
			phone: '+1234567890',
		});

		await user.save();
		expect(await bcrtpt.compare('123456', user.password)).toBe(true);
	});

	it('should validate the password', async () => {
		const user = new User({
			name: 'Caio Damasceno',
			email: 'caio@exemplo.com',
			password: '123456',
			adress: 'João Monlevade',
			phone: '+1234567890',
		});
		
		await user.save();
		expect(await user.checkPassword('123456')).toBe(true);
		expect(await user.checkPassword('wrong password')).toBe(false);
	});

	it('should generate a JWT token', async () => {
		const user = new User({
			name: 'Caio Damasceno',
			email: 'caio@exemplo.com',
			password: '123456',
			adress: 'João Monlevade',
			phone: '+1234567890',
		});

		await user.save();
		expect(user.generateToken()).toBeDefined();
	});
});