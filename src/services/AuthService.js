import $api from '../http'

export default class AuthService {
	static async login(email, password) {
		try {
			return $api.post('/login', {email, password}).then(res => res)
		} catch(err) {
			return err
		}
	}

	static async logout() {
		return $api.post('/logout')
	}

	static async signup(firstName, lastName, phone, email, password) {
		return $api.post('/signup', {firstName, lastName, phone, email, password})
	}
}
