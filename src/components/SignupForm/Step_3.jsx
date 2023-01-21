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
import { MdSend, MdArrowBack } from 'react-icons/md'
import FormComponent from '../FormComponent/index.jsx'

import { FormContext } from '../../pages/Public/SignupPage/index.jsx'

const SignupFromStep3 = () => {
	const { store } = useContext(Context)
	const { setStep } = useContext(FormContext)
	const [error, setError] = useState('')
	// Values
	const [phone, setPhone] = useState('')

	const [isLoading, setIsLoading] = useState(false)

	let schema = object().shape({
		phone: string().required('The field cannot be empty').matches(/^((\+)[0-9]{1,4})([(]|\s|-)?([(])?([0-9]{3})([)])?([)]|\s|-)?([0-9]{3})(\s|-)?([0-9]{2})(\s|-)?([0-9]{1,2})$/, 'The text should be a phone number')
	})

	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	})

	const signup = async () => {
		// const phoneNumber = parsePhoneNumberFromString(phone)
		const phoneValue = methods.getValues('phone')
		// const response = await store.signup(firstName, lastName, phoneValue, emailValue, passwordValue)
		// methods.reset()
		// setStep(1)
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
			<FormComponent onSubmit={methods.handleSubmit(() => { })}>
				<InputComponent
					label="Phone"
					placeholder="+48 222 339 44 98"
					type="text"
					value={phone}
					onChange={e => setPhone(e.target.value)}
					name="phone"
				/>
				<p className={classes.errorMsg}>{error}</p>
				<div className={classes.buttonsContainer}>
					<ButtonComponent isLoading={isLoading} type="submit" iconType="right" icon={<MdSend size={22} />} title="Sumbit" onClick={() => { }} disabled={!methods.formState.isValid} />
					<ButtonComponent isLoading={isLoading} type="button" iconType="left" icon={<MdArrowBack size={22} />} title="Back" onClick={() => setStep(1)} />
					<span>Already have an account? <a>Login</a></span>
				</div>
			</FormComponent>
		</FormProvider>
	)
}

export default observer(SignupFromStep3)
