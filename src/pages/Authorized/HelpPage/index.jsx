import React from 'react'
import classes from './styles.module.scss'
import Slider from '../../../components/Slider/index.jsx'

export const HelpPage = () => {
	const slides = [
		{ title: 'Blog 1', img: 'https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg' },
		{ title: 'Blog 2', img: 'https://www.gry-online.pl/i/h/17/347017472.jpg' },
		{ title: 'Blog 3', img: 'https://cdn.mos.cms.futurecdn.net/iLYFjXg8LNiEcMQhvpRmyd.jpg' },
		{ title: 'Blog 4', img: 'https://apyre.fr/wp-content/uploads/2022/05/bvbf-1-800x450.jpg' },
		{ title: 'Blog 5', img: 'https://planetagracza.pl/wp-content/uploads/2020/09/Cyberpunk_2077_screen_6.jpg' },
		{ title: 'Blog 6', img: 'https://respawnfirst.com/wp-content/uploads/2020/12/Cyberpunk-2077-Night-City-Districts-Gangs-and-PC-System-Requirements.jpg' },
		{ title: 'Blog 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrmkJanaKOipihn3swGhBvDsaTnEavNTEeA&usqp=CAU' },
		{ title: 'Blog 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-37tsEqz-3DAp9MVaybzef0VYl238DsJW5w&usqp=CAU' }
	]


	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<p className={classes.headerTitle}>Switzerland: news</p>
			</div>
			<h3 className={classes.title}>Joined on</h3>
			<Slider slides={slides} id="blogsSlider" />
			<h3 className={classes.title}>Groups</h3>
			<Slider slides={slides} id="groupsSlider" />
		</div>
	)
}
