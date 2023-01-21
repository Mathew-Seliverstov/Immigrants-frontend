import { makeAutoObservable } from 'mobx'
import AuthService from '../services/AuthService'
import axios from 'axios'
import { API_URL } from '../http'

export default class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	setUser(user) {
		this._user = user
	}

	get isAuth() {
		return this._isAuth
	}

	get user() {
		return this._user
	}

	async signup(firstName, lastName, phone, email, password) {
		try {
			const response = await AuthService.signup(firstName, lastName, phone, email, password)
			localStorage.setItem('token', response.data.accessToken)
			this.setIsAuth(true)
			this.setUser(response.data.user)
		} catch(e) {
			console.log(e.response?.data?.message)
		}
	}

	async login(email, password) {
		const response = await AuthService.login(email, password)

		if (response.status === 200) {
			localStorage.setItem('token', response.data.accessToken)
			this.setIsAuth(true)
			this.setUser(response.data.user)
		}
		return response
	}

	async logout() {
		try {
			await AuthService.logout()
			localStorage.removeItem('token')
			this.setIsAuth(false)
			this.setUser({})
		} catch(e) {
			console.log(e.response?.data?.message)
		}
	}

	async checkAuth() {
		try {
			const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
			localStorage.setItem('token', response.data.accessToken)
			this.setIsAuth(true)
			this.setUser(response.data.user)
		} catch(e) {
			console.log(e.response?.data?.message)
		}
	}
}
