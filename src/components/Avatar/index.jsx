import React from 'react'
import styles from './styles.module.scss'

const Avatar = ({size, img}) => {
	return (
		<div className={styles.avatar} style={{width: size, height: size, backgroundImage: `url(${img})`}} />
	)
}

export default Avatar
