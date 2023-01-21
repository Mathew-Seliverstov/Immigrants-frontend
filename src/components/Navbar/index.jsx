import React, { useState } from 'react'
import './styles.scss'
import logo from '../../assets/logo.png'
import { Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	const [show, setShow] = useState(false)

	return (
		<>
			<header>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img src={logo} alt="logo" />
				</div>

				<div className="navMenu">
					<NavLink className="navLink" to="/">About</NavLink>
					<NavLink className="navLink" to="/map">Map</NavLink>
					<NavLink className="navLink" to="/conractus">Contact Us</NavLink>
				</div>
				<div className="btnContainer">
					<NavLink className="navBtnOutline" to="/login">Login</NavLink>
					<NavLink className="navBtn" to="/signup">Signup</NavLink>
				</div>

				<div className="burgerMenu" >
					<FontAwesomeIcon onClick={() => setShow(!show)} icon={!show ? faBars : faTimes} color="#0f0f0f" />
				</div>
			</header>
			{/* Mobile */}
			<div className={show ? 'navMenuMobile open' : 'navMenuMobile'}>
				<NavLink className="navLink" to="/" onClick={() => setShow(false)}>About</NavLink>
				<NavLink className="navLink" to="/map" onClick={() => setShow(false)}>Map</NavLink>
				<NavLink className="navLink" to="/contactus" onClick={() => setShow(false)}>Contact Us</NavLink>
				<NavLink className="navBtnOutline" to="/login" onClick={() => setShow(false)}>Login</NavLink>
				<NavLink className="navBtn" to="/signup" onClick={() => setShow(false)}>Signup</NavLink>
			</div>
			<Outlet />
		</>
	)
}

export default Navbar
