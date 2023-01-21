import React, {useState} from 'react'
import styles from './styles.module.scss'
import { MdOutlineBookmarkBorder, MdBookmark, MdComment, MdThumbDown, MdThumbUp, MdVisibility } from 'react-icons/md'
import Avatar from '../Avatar/index.jsx'
import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')

const Post = ({post}) => {
	const {title, text, img, author, likes, dislikes, views, createdAt} = post
	const {firstName, lastName} = author
	const [cliked, setCliked] = useState(false)

	const getTime = () => {
		dayjs.extend(relativeTime)
		return dayjs(createdAt).fromNow()
	}

	return (
		<div className={styles.postContainer}>
			<div className={styles.header}>
				<div className={styles.leftBlock}>
					<Avatar
						size={40}
						img={'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/dlc_de_cyberpunk_2077_foco_cd_projetk_red__se2l73r0x-1210x544.jpg'}
					/>
					<div className={styles.infoWrap}>
						<h4>{firstName + ' ' + lastName}</h4>
						<h5>{getTime()}</h5>
					</div>
				</div>
				{!cliked ? (
					<MdOutlineBookmarkBorder onClick={() => setCliked(!cliked)} size={40} color="#828282" />
				) : (
					<MdBookmark onClick={() => setCliked(!cliked)} size={40} color="#828282" />
				)}
			</div>
			{img && <div className={styles.postImg} style={{backgroundImage: `url(${img})`}} />}
			<div className={styles.textBlock}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<div className={styles.footer}>
				<div className={styles.group}>
					<div className={styles.block}>
						<div className={styles.block}>
							<MdVisibility size={30} color="#828282" />
							<p>{views}</p>
						</div>
						<MdThumbUp size={30} color="#828282" />
						<p>{likes}</p>
					</div>
					<div className={styles.block}>
						<MdThumbDown size={30} color="#828282" />
						<p>{dislikes}</p>
					</div>
				</div>
				<div className={styles.block}>
					<MdComment size={30} color="#828282" />
					<p>10k</p>
				</div>
			</div>
		</div>
	)
}

export default Post
