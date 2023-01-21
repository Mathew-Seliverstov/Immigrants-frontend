import React from 'react'
import SignupFormStep1 from '../../../components/SignupForm/Step_1.jsx'
import styles from './styles.module.scss'
import img from '../../../assets/img/signup-img-1.png'

export const Step1 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrappper}>
				<div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
			</div>
			<SignupFormStep1 />
		</div>
	)
}
