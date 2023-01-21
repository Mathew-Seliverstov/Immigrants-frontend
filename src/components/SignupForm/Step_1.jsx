import React, { useContext, useState } from 'react'
import classes from './styles.module.scss'
import InputComponent from '../UI/InputComponent/index.jsx'
import PasswordInput from '../UI/PasswordInput/index.jsx'
import ButtonComponent from '../UI/ButtonComponent/index.jsx'
import { useForm, FormProvider } from 'react-hook-form'
import { string, object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Context } from '../../index.js'
import { observer } from 'mobx-react-lite'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { MdArrowForward } from 'react-icons/md'
import FormComponent from '../FormComponent/index.jsx'

import { FormContext } from '../../pages/Public/SignupPage/index.jsx'

const SignupFormStep1 = () => {
	const { store } = useContext(Context)
	const {setStep, values, setValues} = useContext(FormContext)
	// Values
	const [firstname, setFirstname] = useState(values.firstName || '')
	const [lastname, setLastname] = useState(values.lastName || '')
	const [email, setEmail] = useState(values.email || '')
	const [password, setPassword] = useState(values.password || '')

	const [isLoading, setIsLoading] = useState(false)

	let schema = object().shape({
		firstName: string().required('The field cannot be empty').min(2, 'The minimal length of firstname is 2 symbols').max(16, 'The maximal length of firstname is 16 symbols'),
		lastName: string().max(16, 'The maximal length of lastname is 16 symbols'),
		email: string().required('The field cannot be empty').email('The text should be an email'),
		password: string().required('The field cannot be empty').min(6, 'The minimal length of password is 6 symbols').max(16, 'The maximal length of password is 16 symbols')
	})

	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	})

	const signup = async data => {
		const firstName = methods.getValues('firstName')
		const lastName = methods.getValues('lastName')
		const emailValue = methods.getValues('email')
		const passwordValue = methods.getValues('password')

		setValues({
			firstName,
			lastName,
			email: emailValue,
			password: passwordValue
		})
		setStep(2)
	}

	return (
		<FormProvider {...methods}>
			<FormComponent title="Signup" onSubmit={methods.handleSubmit(data => signup(data))}>
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
				<PasswordInput
					value={password}
					onChange={e => setPassword(e.target.value)}
					name="password"
					isDark={true}
				/>
				<div className={classes.buttonsContainer}>
					<ButtonComponent isLoading={isLoading} type="submit" iconType="right" icon={<MdArrowForward size={22} />} title="Next" onClick={() => { }} disabled={!methods.formState.isValid} />
					<span>Already have an account? <a>Login</a></span>
				</div>
			</FormComponent>
		</FormProvider>
	)
}

export default observer(SignupFormStep1)
