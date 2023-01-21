import React from 'react'
import ButtonComponent from '../../../components/UI/ButtonComponent/index.jsx'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
	let navigate = useNavigate()

	return (
		<div style={{ display: 'flex', flex: 1, height: 'calc(100vh - 60px)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<h1 style={{fontSize: 120, marginBottom: 80}}>404</h1>
			<p style={{fontSize: 28}}>Oops! Sorry, we can&#39;t  find the page you&#39;re looking for</p>

			<div style={{width: '30%', marginTop: 30}}>
				<ButtonComponent type="submit" title="Go Home" iconType="no" onClick={() => navigate('/')} disabled={false} />
			</div>
		</div>
	)
}
