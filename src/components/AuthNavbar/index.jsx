import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index.js'
import './styles.scss'
import logo from '../../assets/logo.png'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
	MdMenu,
	MdClose,
	MdHome,
	MdBookmarks,
	MdHelp,
	MdTextSnippet,
	MdAccountCircle,
	MdPeople,
	MdInsertInvitation,
	MdNewReleases,
	MdVolunteerActivism
} from 'react-icons/md'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const AuthNavbar = () => {
	const { store } = useContext(Context)
	const [show, setShow] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const NavBtn = ({path, Icon, title}) => {
		return (
			<div className={`sidebar-navMenu-btn ${location.pathname === path && 'active'}`} onClick={() => navigate(path)}>
				<Icon />
				<p className="sidebar-navMenu-btn__navLink">{title}</p>
			</div>
		)
	}

	return (
		<>
			<header>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img src={logo} alt="logo" />
				</div>

				<div className="header-navMenu">
					<NavLink className="header-navMenu__navLink" to="/">{store.isAuth ? 'Home' : 'About'}</NavLink>
					<NavLink className="header-navMenu__navLink" to={store.isAuth ? '/profile' : '/map'}>{store.isAuth ? 'Profile' : 'Map'}</NavLink>
					<NavLink className="header-navMenu__navLink" to={store.isAuth ? '/groups' : '/contactus'}>{store.isAuth ? 'Groups' : 'Contact us'}</NavLink>
				</div>
				{!store.isAuth && (
					<div className="header-btnContainer">
						<NavLink className="header-btnContainer__navBtnOutline" to="/login">Login</NavLink>
						<NavLink className="header-btnContainer__navBtn" to="/signup">Signup</NavLink>
					</div>
				)}

				<div className="burgerMenu" onClick={() => setShow(!show)}>
					{/* <FontAwesomeIcon onClick={() => setShow(!show)} icon={!show ? faBars : faTimes} color="#0f0f0f" /> */}
					{show && <MdMenu color="#0f0f0f" />}
					{!show && <MdClose color="#0f0f0f" />}
				</div>
			</header>

			{/* Mobile */}
			<div className={show ? 'navMenuMobile open' : 'navMenuMobile'}>
				<NavLink className="navLink" to="/" onClick={() => setShow(false)}>About</NavLink>
				<NavLink className="navLink" to="/map" onClick={() => setShow(false)}>Map</NavLink>
				<NavLink className="navLink" to="/contactus" onClick={() => setShow(false)}>Contact Us</NavLink>
			</div>
			{/* Mobile Unauthorized */}
			{!store.isAuth && <div className={show ? 'navMenuMobile open' : 'navMenuMobile'}>
				<NavLink className="navLink" to="/" onClick={() => setShow(false)}>About</NavLink>
				<NavLink className="navLink" to="/map" onClick={() => setShow(false)}>Map</NavLink>
				<NavLink className="navLink" to="/contactus" onClick={() => setShow(false)}>Contact Us</NavLink>
				<NavLink className="navBtnOutline" to="/login" onClick={() => setShow(false)}>Login</NavLink>
				<NavLink className="navBtn" to="/signup" onClick={() => setShow(false)}>Signup</NavLink>
			</div>}

			{/* Sidebar */}
			{store.isAuth && <div className="sidebar">
				<div className="sidebar-navMenu">
					<NavBtn path="/" title="Home" Icon={() => <MdHome className={`sidebar-navMenu-btn__icon ${location.pathname === '/' && 'active'}`} />} />
					<NavBtn path="/profile" title="Profile" Icon={() => <MdAccountCircle className={`sidebar-navMenu-btn__icon ${location.pathname === '/profile' && 'active'}`} />} />
					<NavBtn path="/blogs" title="Blogs" Icon={() => <MdTextSnippet className={`sidebar-navMenu-btn__icon ${location.pathname === '/blog' && 'active'}`} />} />
					<NavBtn path="/groups" title="Groups" Icon={() => <MdPeople className={`sidebar-navMenu-btn__icon ${location.pathname === '/groups' && 'active'}`} />} />
					<NavBtn path="/help" title="Help" Icon={() => <MdVolunteerActivism className={`sidebar-navMenu-btn__icon ${location.pathname === '/help' && 'active'}`} />} />
					<NavBtn path="/events" title="Events" Icon={() => <MdInsertInvitation className={`sidebar-navMenu-btn__icon ${location.pathname === '/events' && 'active'}`} />} />
					<NavBtn path="/bookmarks" title="Bookmarks" Icon={() => <MdBookmarks className={`sidebar-navMenu-btn__icon ${location.pathname === '/bookmarks' && 'active'}`} />} />
					<NavBtn path="/company" title="Company" Icon={() => <MdNewReleases className={`sidebar-navMenu-btn__icon ${location.pathname === '/company' && 'active'}`} />} />
					<NavBtn path="/support" title="Support" Icon={() => <MdHelp className={`sidebar-navMenu-btn__icon ${location.pathname === '/support' && 'active'}`} />} />
				</div>
			</div>}
			<Outlet />
		</>
	)
}

export default observer(AuthNavbar)
