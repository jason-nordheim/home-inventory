import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
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
	const SPACING = 2;

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
		<Grid container justify="center" spacing={SPACING}>
			<Paper style={{ margin: '1rem', padding: '1rem' }}>
				<form>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<Typography variant="h5">Register</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={SPACING} justify="center">
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
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
						</Grid>
						<Grid container spacing={SPACING} justify="center">
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
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
						</Grid>
						<Grid container spacing={SPACING} justify="center">
							<Grid item xs={10} sm={5} md={4} lg={3}>
								<TextField
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
						</Grid>
						<Grid container spacing={SPACING} spacing={2} justify="center" >
								<Grid item xs={10} sm={5} md={4} lg={3}>
									<TextField
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
								<Grid item xs={10} sm={5} md={4} lg={3}>
									<TextField
										fullWidth
										error={passwordError !== null}
										id="password"
										label="Password"
										defaultValue={password}
										helperText={passwordError == null ? '' : passwordError}
										onChange={handlePasswordInput}
										required
									/>
								</Grid>
							<Grid item xs={12}>
								<Grid container justify="center" >
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
											}>
										Register
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Grid>
	);
};

export default RegistrationForm;
