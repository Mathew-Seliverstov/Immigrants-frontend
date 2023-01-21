import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

const Card = ({title, img, id}) => {
	const navigate = useNavigate()

	return (
		<div
			className={styles.card}
			onClick={() => navigate(`/blogs/${id}`)}
		>
			<div className={styles.cardImg} style={{ backgroundImage: `url(${img})`}} />
			<div className={styles.title}>
				<p>{title}</p>
			</div>
		</div>
	)
}

export default Card
