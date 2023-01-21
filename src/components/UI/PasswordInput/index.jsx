import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useFormContext } from 'react-hook-form'
import { HiEyeOff, HiEye } from 'react-icons/hi'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

const PasswordInput = ({ name, width, isDark, value, ...props }) => {
	const [visible, setVisible] = useState(false)
	const [isHide, setIsHide] = useState(true)
	const [show, setShow] = useState(false)
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const errorStyles = { width: width, borderBottom: '2.5px solid #E40000b2', borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }

	const minLength = value.split('').length >= 6
	const containsDigit = /[0-9]/.test(value)

	return (
		<div className={styles.inputWrap}>
			<label className={styles.inputLabel}>
				Password
			</label>
			<div className={isDark ? styles.customFieldDark : styles.customField} style={errors[name] ? errorStyles : {width: width}}>
				<input
					type={isHide ? 'password' : 'text'}
					placeholder="******"
					className={styles.inputField}
					autoComplete="on"
					onFocus={() => setShow(true)}
					onBlur={() => setShow(false)}
					value={value}
					{...register(name)}
					{...props}
				/>
				<div className={styles.iconContainer} onClick={() => {
					setVisible(!visible)
					setIsHide(!isHide)
				}}>
					{isHide && <HiEyeOff size={22} color="#C9C9C9" />}
					{!isHide && <HiEye className={styles.animation} size={22} color="#C9C9C9" />}
				</div>
			</div>
			<p className={styles.errorMsg}>{errors[name]?.message}</p>
			{false && <div className={styles.checkContainer}>
				<div className={styles.checkWrap}>
					{!minLength ? (
						<MdCancel color="red" />
					) : (
						<MdCheckCircle color="green" />
					)}
					<p className={styles.checkText} style={{color: !minLength ? 'red' : 'green'}}>at least six symbols</p>
				</div>
				<div className={styles.checkWrap}>
					{!containsDigit ? (
						<MdCancel color="red" />
					) : (
						<MdCheckCircle color="green" />
					)}
					<p className={styles.checkText} style={{ color: !containsDigit ? 'red' : 'green' }}>at least one number</p>
				</div>
			</div>}
		</div>
	)
}

export default PasswordInput
