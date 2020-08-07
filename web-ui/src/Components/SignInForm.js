import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';

const SignInForm = ({ Authenticator }) => {
	const [ username, setUsername ] = useState('');
	const [ usernameError, setUsernameError ] = useState(null);
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(null);
	const MIN_CHARS = 3;

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setUsernameError('Username too short');
		}
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setPasswordError('Password too short');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Paper style={{ margin: '1rem 1rem', padding: '2rem 1rem' }}>
			<form>
				<Grid container spacing={2}>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<Typography variant="h5">Sign In</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2} justify="center">
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
									fullWidth
									error={usernameError}
									id="username"
									label="Username"
									defaultValue={username}
									onChange={handleUsernameInput}
									required
								/>
							</Grid>
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
									fullWidth
									error={passwordError}
									id="password"
									label="Password"
									defaultValue={passwordError}
									onChange={handlePasswordInput}
									required
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}  style={{textAlign: 'center'}}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							disabled={
								passwordError !== null ||
								usernameError !== null ||
								password.length < MIN_CHARS ||
								username.length < MIN_CHARS
							}
						>
							Sign In
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default SignInForm;
