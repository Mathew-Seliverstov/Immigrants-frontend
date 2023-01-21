import React from 'react'
import styles from './styles.module.scss'

const FormComponent = ({children, title, ...props}) => {
	return (
		<form autoComplete="on" className={styles.form} {...props}>
			<h2>{title}</h2>
			{children}
		</form>
	)
}

export default FormComponent
