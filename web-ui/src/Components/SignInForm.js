import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './SignInForm.styles';

const SignInForm = ({ Authenticator }) => {
	const [ username, setUsername ] = useState('');
	const [ usernameError, setUsernameError ] = useState(null);
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(null);
	const classes = useStyles();
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
		<Paper>
			<form className={classes.root}>
				<div>
					<Typography variant="h5">Sign In</Typography>
				</div>
				<div>
					<TextField
						error={usernameError}
						id="username"
						label="Username"
						defaultValue={username}
						onChange={handleUsernameInput}
						required
					/>
					<TextField
						error={passwordError}
						id="password"
						label="Password"
						defaultValue={passwordError}
						onChange={handlePasswordInput}
						required
					/>
					<span style={{ alignSelf: 'center' }}>
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
					</span>
				</div>
				<div />
			</form>
		</Paper>
	);
};

export default SignInForm;
