import React, { useContext, useState } from 'react'
import classes from './styles.module.scss'
import InputComponent from '../UI/InputComponent/index.jsx'
import ButtonComponent from '../UI/ButtonComponent/index.jsx'
import { useForm, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Context } from '../../index.js'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { MdSend } from 'react-icons/md'

const LoginFrom = () => {
	const { store } = useContext(Context)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	let schema = yup.object().shape({
		email: yup.string().required('The field cannot be empty').email('The field should be an email'),
		password: yup.string().required('The field cannot be empty').min(6, 'The minimal length of password is 6 symbols').max(16, 'The maximal length of password is 16 symbols')
	})
	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	})
	const navigate = useNavigate()

	const login = async () => {
		const emailValue = methods.getValues('email')
		const passwordValue = methods.getValues('password')
		await store
			.login(emailValue, passwordValue)
			.then(() => {
				setIsLoading(true)
				navigate('/', {replace: true})
			})
			.catch(err => {
				setError(err.response.data.message)
				setEmail('')
				setPassword('')
			})
	}

	return (
		<FormProvider {...methods}>
			<form autoComplete="on" className={classes.form} onSubmit={methods.handleSubmit(login)}>
				<h2>Login</h2>
				<InputComponent
					key={1}
					label="Email"
					placeholder="mail@example.com"
					value={email}
					onChange={e => setEmail(e.target.value)}
					name="email"
					isDark={true}
					disabled={isLoading}
				/>
				<InputComponent
					key={2}
					label="Password"
					secure={true}
					placeholder="pass1234"
					value={password}
					onChange={e => setPassword(e.target.value)}
					name="password"
					isDark={true}
					disabled={isLoading}
				/>
				<p className={classes.errorMsg}>{error}</p>
				<div className={classes.buttonsContainer}>
					<ButtonComponent isLoading={isLoading} type="submit" iconType="right" icon={<MdSend size={20} />} title="Submit" onClick={() => login()} disabled={!methods.formState.isValid} />
					<span>Don&#39;t have an account? <a>Signup</a></span>
				</div>
			</form>
		</FormProvider>
	)
}

export default observer(LoginFrom)
