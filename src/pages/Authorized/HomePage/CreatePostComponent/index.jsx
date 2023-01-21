import React from 'react'
import styles from './styles.module.scss'
import ButtonComponent from '../../../../components/UI/ButtonComponent/index.jsx'
import {MdImage, MdAdd} from 'react-icons/md'
import Avatar from '../../../../components/Avatar/index.jsx'

const CreatePost = ({showModal, setShowModal}) => {
	return (
		<div className={styles.createPostContainer}>
			<Avatar
				size={40}
				img={'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/dlc_de_cyberpunk_2077_foco_cd_projetk_red__se2l73r0x-1210x544.jpg'}
				style={{ boxShadow: '6px 0 12px #00000020' }}
			/>
			<ButtonComponent
				iconType="left"
				icon={<MdAdd size={22} />}
				title="add"
				style={{width: '80%'}}
				onClick={() => setShowModal(true)}
			/>
			<MdImage size={40} color="#828282" />
		</div>
	)
}

export default CreatePost
