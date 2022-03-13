import React from 'react'
import logo from './assets/logo.png'

function App() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
			<img src={logo} style={{ height: 600, width: 600 }} alt="logo" />
			<p
				style={{ fontFamily: 'sans-serif', fontSize: 36, fontWeight: 600 }}
			>
				Hello World!
			</p>
		</div>
	)
}

export default App
