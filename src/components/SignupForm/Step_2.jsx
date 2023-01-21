import React, { useContext, useState } from 'react'
import classes from './styles.module.scss'
import InputComponent from '../UI/InputComponent/index.jsx'
import ButtonComponent from '../UI/ButtonComponent/index.jsx'
import { useForm, FormProvider } from 'react-hook-form'
import { string, object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Context } from '../../index.js'
import { observer } from 'mobx-react-lite'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import FormComponent from '../FormComponent/index.jsx'

import { FormContext } from '../../pages/Public/SignupPage/index.jsx'

const SignupFromStep2 = () => {
	const { store } = useContext(Context)
	const { setStep } = useContext(FormContext)
	const [error, setError] = useState('')
	// Values
	const [code, setCode] = useState('')

	const [isLoading, setIsLoading] = useState(false)

	let schema = object().shape({
		code: string().required('The field cannot be empty').matches(/^[0-9]{6}$/, 'The text should be a six-digit code')
	})

	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	})

	const signup = async () => {
		setStep(3)
	}

	return (
		<FormProvider {...methods}>
			<FormComponent title="Signup" onSubmit={methods.handleSubmit(() => signup())}>
				<p className={classes.infoText}>We have sent you an email with six-digit code</p>
				<InputComponent
					label="Confirm"
					placeholder="Confirm code"
					type="text"
					value={code}
					onChange={e => setCode(e.target.value)}
					name="code"
					isDark={true}
				/>
				<p className={classes.errorMsg}>{error}</p>
				<div className={classes.buttonsContainer}>
					<ButtonComponent isLoading={isLoading} type="button" iconType="right" icon={<MdArrowForward size={22} />} title="Next" onClick={() => signup()} disabled={!methods.formState.isValid} />
					<ButtonComponent isLoading={isLoading} type="button" iconType="left" icon={<MdArrowBack size={22} />} title="Back" onClick={() => setStep(1)} />
					<span>Already have an account? <a>Login</a></span>
				</div>
			</FormComponent>
		</FormProvider>
	)
}

export default observer(SignupFromStep2)
