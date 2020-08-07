import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';

const SignInForm = ({ Authenticator }) => {
	const [ username, setUsername ] = useState('');
	const [ usernameError, setUsernameError ] = useState(null);
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(null);
	const MIN_CHARS = 3;
	const hasWhiteSpaceRegEx = new RegExp(/\s/)

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setUsernameError('Username too short');
		} else if (hasWhiteSpaceRegEx.test(e.target.value)) {
			setUsernameError('Username cannot have spaces')
		} else {
			setUsernameError(null)
		}
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setPasswordError('Password too short');
		} else if (hasWhiteSpaceRegEx.test(e.target.value)) {
			setPasswordError('Password cannot have spaces')
		} else {
			setPasswordError(null)
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const result = Authenticator.login({ username, password })
		console.log(result)
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
									error={usernameError !== null }
									id="username"
									label="Username"
									helperText={usernameError !== null ? usernameError : ''}
									onChange={handleUsernameInput}
									required
								/>
							</Grid>
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
									fullWidth
									error={passwordError !== null}
									id="password"
									label="Password"
									type="password"
									helperText={passwordError !== null ? passwordError : ''}
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
