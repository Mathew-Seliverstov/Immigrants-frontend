import React from 'react'
import ReactDom from 'react-dom'
import './styles.scss'
import { MdClose } from 'react-icons/md'

const ModalComponent = ({ show, setShow, children }) => {
	if(!show) return null

	return ReactDom.createPortal(
		<div className="overlay">
			<div className="modal__content">
				<MdClose size={30} color="#0f0f0f" onClick={() => setShow(false)} className="btn" />
				{children}
			</div>
		</div>,
		document.getElementById('portal')
	)
}

export default ModalComponent
