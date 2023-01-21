import React from 'react'
import SignupFormStep2 from '../../../components/SignupForm/Step_2.jsx'
import styles from './styles.module.scss'
import img from '../../../assets/img/signup-img-2.png'

export const Step2 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrappper}>
				<div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
			</div>
			<SignupFormStep2 />
		</div>
	)
}
