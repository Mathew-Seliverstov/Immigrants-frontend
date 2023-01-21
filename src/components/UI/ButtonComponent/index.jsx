import React from 'react'
import classes from './styles.module.scss'
import IconComponent from '../IconComponent/index.jsx'

const ButtonComponent = ({ title, disabled, iconType, icon, isLoading, ...props }) => {
	// TODO: Сделать чтобы можно было менять размер кнопки передавая значение size
	const Icon = () => icon

	return (
		<button
			className={classes.btn}
			disabled={disabled}
			style={iconType === 'right' ? { flexDirection: 'row-reverse' } : iconType === 'only' ? {width: 40, borderRadius: 20} : {}}
			{...props}
		>
			{isLoading && (
				<IconComponent name="loader" />
			)}
			{(iconType !== 'no' && !isLoading) && <Icon color={disabled ? '#aaa' : '#fff'} />}
			{(iconType !== 'no' && iconType !== 'only' && !isLoading) && <div className={classes.animation}></div>}
			{(iconType !== 'only' && !isLoading) && <p>{title || 'title'}</p>}
		</button>
	)
}

export default ButtonComponent
