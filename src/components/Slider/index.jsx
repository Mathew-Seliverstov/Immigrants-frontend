import React from 'react'
import styles from './styles.module.scss'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Card from './Card.jsx'

const Slider = ({slides, id}) => {
	const slideLeft = () => {
		const slider = document.getElementById(id)
		slider.scrollLeft = slider.scrollLeft - 320
	}

	const slideRight = () => {
		const slider = document.getElementById(id)
		slider.scrollLeft = slider.scrollLeft + 320
	}

	return (
		<div className={styles.sliderContainer}>
			{slides.length > 3 && (
				<MdChevronLeft size={35} className={styles.arrow} style={{ left: 0 }} onClick={slideLeft} />
			)}
			<div className={styles.slider} id={id}>
				{slides.map((slide, index) => {
					return (
						<Card key={index} title={slide.title} img={slide.banner} id={slide._id} />
					)
				})}
			</div>
			{slides.length > 3 && (
				<MdChevronRight size={35} className={styles.arrow} style={{ right: 0 }} onClick={slideRight}/>
			)}
		</div>
	)
}

export default Slider
