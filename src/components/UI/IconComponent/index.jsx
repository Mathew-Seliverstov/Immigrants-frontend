import React from 'react'
import classes from './styles.module.scss'

const IconComponent = ({ name, size, color }) => {
	switch (name) {
		case 'eye':
			return (
				<svg className={classes.animation} style={{ width: size || 22, fill: color || '#aaa' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
					<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
				</svg>
			)
		case 'eye-off':
			return (
				<svg className={classes.animation} style={{ width: size || 22, fill: color || '#aaa' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
					<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
				</svg>
			)
		case 'send':
			return (
				<svg style={{ width: size || 22, fill: color || '#aaa' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.6C2.74 3.31 2.01 3.8 2.01 4.51L2 9.12C2 9.62 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" />
				</svg>
			)
		case 'add':
			return (
				<svg style={{ width: size || 22, fill: color || '#aaa' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" />
				</svg>
			)
		case 'cancel-circle':
			return (
				<svg style={{ width: size || 22, fill: color || '#aaa' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z" />
				</svg>
			)
		case 'check-circle':
			return (
				<svg style={{ width: size || 22, fill: color || '#aaa' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" />
				</svg>
			)
		case 'loader':
			return(
				<svg style={{width: 40, height: 40}} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
					<path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="rotate"
							dur="1s"
							from="0 50 50"
							to="360 50 50"
							repeatCount="indefinite" />
					</path>
				</svg>
			)
		case 'blog':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
					<g>
						<rect style={{ width: size || 22 }} fill="none" /><rect fill="none" /></g><g>
						<path d="M21.15,3.85l-0.82,0.82l-0.95-0.96c-0.39-0.39-1.02-0.39-1.42,0L17,4.67l-0.96-0.96c-0.39-0.39-1.03-0.39-1.42,0 l-0.95,0.96l-0.96-0.96c-0.39-0.39-1.02-0.39-1.41,0l-0.96,0.96L9.38,3.71c-0.39-0.39-1.02-0.39-1.42,0L7,4.67L6.04,3.71 c-0.39-0.39-1.03-0.39-1.42,0L3.67,4.67L2.85,3.85C2.54,3.54,2,3.76,2,4.21V19c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V4.21 C22,3.76,21.46,3.54,21.15,3.85z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z" />
					</g>
				</svg>
			)
	}
}

export default IconComponent
