import React, { useContext, useEffect, useState } from 'react'
import './App.scss'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import { observer } from 'mobx-react-lite'
import MoonLoader from 'react-spinners/MoonLoader'

function App() {
	const { store } = useContext(Context)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth().then(() => setIsLoading(false)).catch(() => setIsLoading(false))
		} else {
			setIsLoading(false)
		}
	}, [])

	if (!isLoading) {
		return (
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		)
	} else {
		return (
			<div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<MoonLoader color="#0273F9" loading={true} size={100} />
			</div>
		)
	}
}

export default observer(App)
