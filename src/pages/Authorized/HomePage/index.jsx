import React, { useContext, useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index.js'
import classes from './styles.module.scss'
import Slider from '../../../components/Slider/index.jsx'
import CreatePost from './CreatePostComponent/index.jsx'
import Post from '../../../components/Post/index.jsx'
import Avatar from '../../../components/Avatar/index.jsx'
import axios from 'axios'
import ModalComponent from '../../../components/UI/ModalComponent/index.jsx'

const HomePage = () => {
	const { store } = useContext(Context)
	const [posts, setPosts] = useState([])
	const [showModal, setShowModal] = useState(false)
	const slides = [
		{ title: 'Blog 1', img: 'https://www.cyberpunk.net/build/images/home3/screen-image-city-209a8285.jpg'},
		{ title: 'Blog 2', img: 'https://www.gry-online.pl/i/h/17/347017472.jpg' },
		{ title: 'Blog 3', img: 'https://cdn.mos.cms.futurecdn.net/iLYFjXg8LNiEcMQhvpRmyd.jpg' },
		{ title: 'Blog 4', img: 'https://apyre.fr/wp-content/uploads/2022/05/bvbf-1-800x450.jpg' },
		{ title: 'Blog 5', img: 'https://planetagracza.pl/wp-content/uploads/2020/09/Cyberpunk_2077_screen_6.jpg' },
		{ title: 'Blog 6', img: 'https://respawnfirst.com/wp-content/uploads/2020/12/Cyberpunk-2077-Night-City-Districts-Gangs-and-PC-System-Requirements.jpg' },
		{ title: 'Blog 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrmkJanaKOipihn3swGhBvDsaTnEavNTEeA&usqp=CAU' },
		{ title: 'Blog 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-37tsEqz-3DAp9MVaybzef0VYl238DsJW5w&usqp=CAU' }
	]

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get('http://localhost:7000/post')
				.then(res => setPosts(res.data))
				.catch(err => console.log(err))
		}
		fetchData()
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<div className={classes.avatarWrapper}>
					<Avatar
						size={190}
						img={'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/dlc_de_cyberpunk_2077_foco_cd_projetk_red__se2l73r0x-1210x544.jpg'}
						style={{ boxShadow: '6px 0 12px #00000020'}}
					/>
					<div className={classes.infoWrapper}>
						<h4>{store.user.firstName + store.user.lastName}</h4>
						<h6>{store.user.email}</h6>
					</div>
				</div>
			</div>
			<h3 className={classes.title}>Joined on</h3>
			<Slider slides={slides} id="blogsSlider" />
			<h3 className={classes.title}>Groups</h3>
			<Slider slides={slides} id="groupsSlider"/>
			<h3 className={classes.title}>Posts</h3>

			<ModalComponent show={showModal} setShow={setShowModal}>
				<h3>Modal</h3>
			</ModalComponent>

			<CreatePost showModal={showModal} setShowModal={setShowModal} />
			<div className={classes.postsContainer}>
				{posts.map((post, index) => {
					return (
						<Post key={index} post={post} />
					)
				})}
			</div>
		</div>
	)
}

export default observer(HomePage)
