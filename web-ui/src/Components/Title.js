import React from 'react'
import { Typography } from '@material-ui/core'

/**
 * Title component to be displayed at the top of each page 
 * @param {string} title 
 */
export const Title = ( { title, ...props } ) => {
	return (
		<span className="title__container">
			<Typography variant="h3" style={{ display: 'flex', placeContent: 'center', marginBottom: '1rem' }}>
				{title}
			</Typography>
			<hr />
		</span>
	)
}
