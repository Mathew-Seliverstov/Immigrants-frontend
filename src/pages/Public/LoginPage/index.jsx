import React from 'react'
import LoginFrom from '../../../components/LoginForm/index.jsx'
import './styles.scss'
import img from '../../../assets/img/login-img.png'

export const LoginPage = () => {
	return (
		<div className="container">
			<div className="imgWrappper">
				<div className="img" style={{ backgroundImage: `url(${img})` }} />
			</div>
			<LoginFrom />
		</div>
	)
}
