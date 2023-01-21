import React, { useState, createContext } from 'react'
import { Step1 } from './Step_1.jsx'
import { Step2 } from './Step_2.jsx'
import { Step3 } from './Step_3.jsx'

export const FormContext = createContext()

export const SignupPage = () => {
	const [step, setStep] = useState(1)
	const [values, setValues] = useState({})

	const value = {
		step,
		setStep,
		values,
		setValues
	}

	return (
		<FormContext.Provider value={value}>
			{step === 1 && <Step1/>}
			{step === 2 && <Step2 />}
			{step === 3 && <Step3 />}
		</FormContext.Provider>
	)
}
