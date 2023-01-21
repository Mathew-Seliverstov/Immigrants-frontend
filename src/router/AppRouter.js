import React, { useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Context } from '../index.js'
import { observer } from 'mobx-react-lite'
// Pages
// -- Public
import {AboutPage} from '../pages/Public/AboutPage/index.jsx'
import MapPage from '../pages/Public/MapPage/index.jsx'
import {ContactUsPage} from '../pages/Public/ContactUsPage/index.jsx'
import {LoginPage} from '../pages/Public/LoginPage/index.jsx'
import { SignupPage } from '../pages/Public/SignupPage/index.jsx'
import { NotFoundPage } from '../pages/Public/NotFoundPage/index.jsx'
// -- Authorized
import {ProfilePage} from '../pages/Authorized/ProfilePage/index.jsx'
import GroupsPage from '../pages/Authorized/GroupsPage/index.jsx'
import HomePage from '../pages/Authorized/HomePage/index.jsx'
import { HelpPage } from '../pages/Authorized/HelpPage/index.jsx'
import { BlogsPage } from '../pages/Authorized/BlogsPage/index.jsx'
import { BlogPage } from '../pages/Authorized/BlogPage/index.jsx'
import FeedBackPage from '../pages/Authorized/FeedBackPage/index.jsx'
// Components
// import Navbar from '../components/Navbar/index.jsx'
import AuthNavbar from '../components/AuthNavbar/index.jsx'


const AppRouter = () => {
	const { store } = useContext(Context)
	if (store.isAuth) {
		return (
			<Routes>
				<Route path="/" element={<AuthNavbar />}>
					<Route index element={<HomePage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="blogs" element={<BlogsPage />} />
					<Route path="blogs/:id" element={<BlogPage />} />
					<Route path="groups" element={<GroupsPage />} />
					<Route path="help" element={<HelpPage />} />
					<Route path="company" element={<FeedBackPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		)
	} else {
		return (
			<Routes>
				<Route path="/" element={<AuthNavbar />}>
					<Route index element={<AboutPage />} />
					<Route path="map" element={<MapPage />} />
					<Route path="contactus" element={<ContactUsPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignupPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		)
	}
}

export default observer(AppRouter)
