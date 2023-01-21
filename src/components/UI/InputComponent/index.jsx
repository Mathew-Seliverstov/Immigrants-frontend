import React, { useState } from 'react'
import classes from './styles.module.scss'
import { useFormContext } from 'react-hook-form'
import { HiEyeOff, HiEye } from 'react-icons/hi'

const InputComponent = ({ placeholder, type, secure, label, labelColor, name, width, isDark, ...props }) => {
	const [visible, setVisible] = useState(false)
	const [inputType, setInputType] = useState('password')
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const errorStyles = { width: width, borderBottom: '2.5px solid #E40000b2', borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }

	return (
		<div className={classes.inputWrap}>
			<label style={{color: labelColor}} className={classes.inputLabel}>
				{label || 'Label'}
			</label>
			<div className={isDark ? classes.customFieldDark : classes.customField} style={errors[name] ? errorStyles : {width: width}}>
				<input
					type={secure ? inputType : type || 'text'}
					placeholder={placeholder || 'placeholder'}
					className={classes.inputField}
					autoComplete="on"
					{...register(name)}
					{...props}
				/>
				<div className={classes.iconContainer} onClick={() => {
					setVisible(!visible)
					setInputType(inputType === 'password' ? 'text' : 'password')
				}}>
					{secure ? !visible ? (
						<HiEyeOff size={22} color="#C9C9C9" />
					) : (
						<HiEye className={classes.animation} size={22} color="#C9C9C9" />
					) : ''}
				</div>
			</div>
			<p className={classes.errorMsg}>{errors[name]?.message}</p>
		</div>
	)
}

export default InputComponent
