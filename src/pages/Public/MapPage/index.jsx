import { observer } from 'mobx-react-lite'
import React from 'react'

const MapPage = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<h1>MapPage</h1>
		</div>
	)
}

export default observer(MapPage)
