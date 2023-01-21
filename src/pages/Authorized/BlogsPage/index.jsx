import React, { useState, useEffect} from 'react'
import classes from './styles.module.scss'
import Slider from '../../../components/Slider/index.jsx'
import axios from 'axios'

export const BlogsPage = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get('http://localhost:7000/blog')
				.then(res => {
					console.log(res.data)
					setBlogs(res.data)
				})
				.catch(err => console.log(err))
		}
		fetchData()
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.header} />
			<h3 className={classes.title}>Joined on</h3>
			<Slider slides={blogs} id="blogsSlider" />
			{/* <h3 className={classes.title}>Groups</h3>
			<Slider slides={slides} id="groupsSlider" /> */}
		</div>
	)
}
