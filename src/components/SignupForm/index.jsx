import React, { useContext, useState } from 'react'
import classes from './styles.module.scss'
import InputComponent from '../UI/InputComponent/index.jsx'
import ButtonComponent from '../UI/ButtonComponent/index.jsx'
import { useForm, FormProvider } from 'react-hook-form'
import {string, object} from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Context } from '../../index.js'
import { observer } from 'mobx-react-lite'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { MdSend, MdArrowForward } from 'react-icons/md'
import FormComponent from '../FormComponent/index.jsx'

const SignupFrom = () => {
	const { store } = useContext(Context)
	const [step, setStep] = useState(1)
	const [error, setError] = useState('')
	// Values
	// -- Step_1
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// -- Step_2
	const [phone, setPhone] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	let schema = object().shape({
		firstName: string().required('The field cannot be empty').min(2, 'The minimal length of firstname is 2 symbols').max(16, 'The maximal length of firstname is 16 symbols'),
		lastName: string().max(16, 'The maximal length of lastname is 16 symbols'),
		email: string().required('The field cannot be empty').email('The text should be an email'),
		password: string().required('The field cannot be empty').min(6, 'The minimal length of password is 6 symbols').max(16, 'The maximal length of password is 16 symbols'),
	})
	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	})

	const signup = async () => {
		// const phoneNumber = parsePhoneNumberFromString(phone)
		setStep(2)
		const firstName = methods.getValues('firstName')
		const lastName = methods.getValues('lastName')
		const emailValue = methods.getValues('email')
		const passwordValue = methods.getValues('password')
		const phoneValue = phone
		// const response = await store.signup(firstName, lastName, phoneValue, emailValue, passwordValue)
		// methods.reset()
	}

	// const normalizePhoneNumber = value => {
	// 	const phoneNumber = parsePhoneNumberFromString(value)

	// 	if (!phoneNumber) {
	// 		return value
	// 	} else {
	// 		return phoneNumber.formatInternational()
	// 	}
	// }

	return (
		<FormProvider {...methods}>
			<FormComponent onSubmit={methods.handleSubmit(() => {})}>
				<InputComponent
					label="Firstname"
					placeholder="John"
					value={firstname}
					onChange={e => setFirstname(e.target.value)}
					name="firstName"
					isDark={true}
				/>
				<InputComponent
					label="Lastname"
					placeholder="Snow"
					value={lastname}
					onChange={e => setLastname(e.target.value)}
					name="lastName"
					isDark={true}
				/>
				<InputComponent
					label="Email"
					placeholder="john@example.com"
					value={email}
					onChange={e => setEmail(e.target.value)}
					name="email"
					type="email"
					isDark={true}
				/>
				<InputComponent
					label="Password"
					secure={true}
					placeholder="*******"
					value={password}
					onChange={e => setPassword(e.target.value)}
					name="password"
					isDark={true}
				/>
				{/* Step_2 */}
				{/* <InputComponent
					label="Phone"
					placeholder="+48 222 339 44 98"
					type="text"
					value={phone}
					onChange={e => setPhone(e.target.value)}
					name="phone"
				/> */}
				<p className={classes.errorMsg}>{error}</p>
				<div className={classes.buttonsContainer}>
					<ButtonComponent isLoading={isLoading} type="submit" iconType="right" icon={<MdArrowForward size={22} />} title="Next" onClick={() => {}} disabled={!methods.formState.isValid} />
					<span>Already have an account? <a>Login</a></span>
				</div>
			</FormComponent>
		</FormProvider>
	)
}

export default observer(SignupFrom)
