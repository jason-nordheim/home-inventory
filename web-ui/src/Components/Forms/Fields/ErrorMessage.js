import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const ErrorMessage = (errorMessage) => {
	return (
		<Grid item xs={12} style={{ textAlign: 'center', marginTop: '1rem' }}>
			<Typography paragraph style={{ color: 'red' }}>
				{errorMessage}
			</Typography>
		</Grid>
	);
}

export default ErrorMessage