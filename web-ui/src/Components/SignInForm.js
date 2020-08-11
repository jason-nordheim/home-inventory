import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useFormStyles } from '../style/useFormStyles';
import showErrorMessage from './ShowErrorMessage';
import { AuthorizationContext } from '../AuthorizationContext';

const SignInForm = ({ login, display, toggleDisplay }) => {
	const [ username, setUsername ] = useState('');
	const [ usernameError, setUsernameError ] = useState(null);
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(null);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const MIN_CHARS = 3;
	const hasWhiteSpaceRegEx = new RegExp(/\s/);

	// remove the error message after 2 seconds
	useEffect(
		() => {
			if (errorMessage !== null) {
				setTimeout(() => {
					setErrorMessage(null);
				}, 2000);
			}
		},
		[ errorMessage ]
	);

	const classes = useFormStyles();

	if (display === false) {
		return null;
	}

	return (
		<AuthorizationContext.Consumer>
			{(authorizationContext) => {
				const handleUsernameInput = (e) => {
					setUsername(e.target.value);
					if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
						setUsernameError('Username too short');
					} else if (hasWhiteSpaceRegEx.test(e.target.value)) {
						setUsernameError('Username cannot have spaces');
					} else {
						setUsernameError(null);
					}
				};

				const handlePasswordInput = (e) => {
					setPassword(e.target.value);
					if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
						setPasswordError('Password too short');
					} else if (hasWhiteSpaceRegEx.test(e.target.value)) {
						setPasswordError('Password cannot have spaces');
					} else {
						setPasswordError(null);
					}
				};

				const handleSubmit = async (e) => {
					e.preventDefault();
					authorizationContext.dispatch({type: 'login', payload: { username, password}})
				};


				return (
					<Grid container justify="center" className={classes.root}>
						<Paper className={classes.paper}>
							<form>
								<Grid item>
									<Typography variant="h5">Sign In</Typography>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										className={classes.textField}
										error={usernameError !== null}
										id="username"
										label="Username"
										helperText={usernameError !== null ? usernameError : ''}
										onChange={handleUsernameInput}
										required
									/>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										className={classes.textField}
										error={passwordError !== null}
										id="password"
										label="Password"
										type="password"
										helperText={passwordError !== null ? passwordError : ''}
										onChange={handlePasswordInput}
										required
									/>
								</Grid>
								<Grid item>
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
										style={{
											marginTop : '1rem'
										}}
									>
										Sign In
									</Button>
								</Grid>
								<br />
								<Grid item>
									<Typography paragraph>
										Don't have an account? <u onClick={toggleDisplay}>Click here</u> to register
									</Typography>
								</Grid>
								{errorMessage !== null && showErrorMessage(errorMessage)}
							</form>
						</Paper>
					</Grid>
				);
			}}
		</AuthorizationContext.Consumer>
	);
};

export default SignInForm;
