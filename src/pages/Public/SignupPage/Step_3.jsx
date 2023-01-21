import React from 'react'
import SignupFormStep3 from '../../../components/SignupForm/Step_3.jsx'
import styles from './styles.module.scss'
import img from '../../../assets/img/signup-img-3.png'

export const Step3 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrappper}>
				<div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
			</div>
			<SignupFormStep3 />
		</div>
	)
}
