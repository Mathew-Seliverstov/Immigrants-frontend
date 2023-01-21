import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import classes from './styles.module.scss'
// import Post from '../../../components/Post/index.jsx'
// import Avatar from '../../../components/Avatar/index.jsx'
import axios from 'axios'

export const BlogPage = () => {
	const navigate = useNavigate()
	const params = useParams()
	const id = params.id
	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`http://localhost:7000/blog/${id}`)
				.then(res => setData(res.data))
				.catch(err => console.log(err))
		}
		fetchData()
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.header} style={{backgroundImage: `url(${data.banner})`}}>
				{/* <div
					className={classes.goBack}
					onClick={() => {}}
				>
					<MdArrowBack />
					GoBack
				</div> */}
				<p className={classes.headerTitle}>{data.title}</p>
			</div>
			<div className={classes.infoBlock}>
				<div className={classes.block}>
					<h3 style={{marginBottom: 5}}>Description:</h3>
					{data.description}
				</div>
			</div>
			<h5 className={classes.description}></h5>

			{/* <div className={classes.postsContainer}>
				{posts.map((post, index) => {
					return (
						<Post key={index} post={post} />
					)
				})}
			</div> */}
		</div>
	)
}
