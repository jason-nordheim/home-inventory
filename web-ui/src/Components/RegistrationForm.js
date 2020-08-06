import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './SignInForm.styles';

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
	const classes = useStyles();
	const MIN_CHARS = 3;

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
		if (e.target.value.length < 3 && e.target.value.length !== 0) {
			setUsernameError('Username too short');
		} else {
			setUsernameError(null);
		}
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setPasswordError('Password too short');
		} else {
			setPasswordError(null);
		}
	};

	const handleNameInput = (e) => {
		setName(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setNameError('Name too short');
		} else {
			setNameError(null);
		}
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
		if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
			setEmailError('Invalid Email Address');
		} else {
		}
	};

	const handlePhoneInput = (e) => {
		setPhone(e.target.value);
		if (e.target.value.length < 10) {
			setPhoneError('Invalid Phone Number');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
	};

	return (
		<Paper>
			<form className={classes.root}>
				<div>
					<Typography variant="h5">Register</Typography>
				</div>
				<div>
					<TextField
						error={nameError !== null}
						id="name"
						label="Name"
						defaultValue={name}
						helperText={nameError == null ? '' : nameError}
						onChange={handleNameInput}
						required
					/>
					<TextField
						error={emailError !== null}
						id="email"
						label="Email"
						defaultValue={email}
						helperText={emailError == null ? '' : emailError}
						onChange={handleEmailInput}
						required
					/>
					<TextField
						error={phoneError !== null}
						id="phone"
						label="Phone"
						defaultValue={phone}
						helperText={phoneError == null ? '' : phoneError}
						onChange={handlePhoneInput}
						required
					/>
				</div>
				<div>
					<TextField
						error={usernameError !== null}
						id="username"
						label="Username"
						defaultValue={username}
						helperText={usernameError == null ? '' : usernameError}
						onChange={handleUsernameInput}
						required
					/>
					<TextField
						error={passwordError !== null}
						id="password"
						label="Password"
						defaultValue={password}
						helperText={passwordError == null ? '' : passwordError}
						onChange={handlePasswordInput}
						required
					/>
				</div>
				<div>
					<span style={{ alignSelf: 'center' }}>
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
						>
							Register
						</Button>
					</span>
				</div>
				<div />
			</form>
		</Paper>
	);
};

export default RegistrationForm;
