import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useFormStyles } from './Form.Styles';

const RegistrationForm = ({ Authenticator }) => {
	const [ username, setUsername ] = useState('');
	const [ usernameError, setUsernameError ] = useState(null);
	const [ password, setPassword ] = useState('');
	const [ passwordError, setPasswordError ] = useState(null);
	const [ name, setName ] = useState('');
	const [ nameError, setNameError ] = useState(null);
	const [ email, setEmail ] = useState('');
	const [ emailError, setEmailError ] = useState(null);
	const [ phone, setPhone ] = useState('');
	const [ phoneError, setPhoneError ] = useState(null);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const hasWhiteSpaceRegEx = new RegExp(/\s/);
	const hasAtSymbolRegEx = new RegExp(/@/);
	const MIN_CHARS = 3;
	const SPACING = 2;

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

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
		if (e.target.value.length < 3 && e.target.value.length !== 0) {
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
			setPasswordError(null); // clear error
		}
	};

	const handleNameInput = (e) => {
		setName(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setNameError('Name too short');
		} else if (!hasWhiteSpaceRegEx.test(e.target.value)) {
			setNameError('Name must include first and last name');
		} else {
			setNameError(null); // clear error
		}
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setEmailError('Invalid Email Address');
		} else if (!hasAtSymbolRegEx.test(e.target.value)) {
			setEmailError('Invalid email address (format: `username@domain.com`');
		} else {
			setEmailError(null); // clear error
		}
	};

	const handlePhoneInput = (e) => {
		setPhone(e.target.value);
		if (e.target.value.length < 10) {
			setPhoneError('Invalid Phone Number');
		} else {
			setPhoneError(null); // clear error
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		Authenticator.register({ username, password, email, phone })
			.then((res) => console.log('result', res))
			.catch((error) => setErrorMessage(error.message));
	};

	const classes = useFormStyles();

	return (
		<Grid container justify="center" className={classes.root}>
			<Paper className={classes.paper}>
				<form>
					<Grid item>
						<Typography variant="h5">Register</Typography>
					</Grid>
					<Grid item>
						<Grid item>
							<TextField
								className={classes.textField}
								fullWidth
								error={nameError !== null}
								id="name"
								label="Name"
								defaultValue={name}
								helperText={nameError == null ? '' : nameError}
								onChange={handleNameInput}
								required
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.textField}
								fullWidth
								error={emailError !== null}
								id="email"
								label="Email"
								defaultValue={email}
								helperText={emailError == null ? '' : emailError}
								onChange={handleEmailInput}
								required
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.textField}
								fullWidth
								error={phoneError !== null}
								id="phone"
								label="Phone"
								defaultValue={phone}
								helperText={phoneError == null ? '' : phoneError}
								onChange={handlePhoneInput}
								required
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.textField}
								fullWidth
								error={usernameError !== null}
								id="username"
								label="Username"
								defaultValue={username}
								helperText={usernameError == null ? '' : usernameError}
								onChange={handleUsernameInput}
								required
							/>
						</Grid>
						<Grid item>
							<TextField
								className={classes.textField}
								fullWidth
								error={passwordError !== null}
								id="password"
								label="Password"
								type="password"
								defaultValue={password}
								helperText={passwordError == null ? '' : passwordError}
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
									emailError !== null ||
									phoneError !== null ||
									password.length < MIN_CHARS ||
									username.length < MIN_CHARS
								}
								style={{ marginTop: '1rem' }}
							>
								Register
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Grid>
	);
};

export default RegistrationForm;
