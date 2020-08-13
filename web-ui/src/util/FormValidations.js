const MIN_CHARS = 3;
const hasWhiteSpaceRegEx = new RegExp(/\s/);
const hasAtSymbolRegEx = new RegExp(/@/);

export const userNameInputChanged = (e, setUsername, setUsernameError) => {
  setUsername(e.target.value);
  if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
    setUsernameError("Username too short");
  } else if (
    hasWhiteSpaceRegEx.test(e.target.value) &&
    e.target.value.length !== 0
  ) {
    setUsernameError("Username cannot have spaces");
  } else {
    setUsernameError(null);
  }
};

export const passwordInputChanged = (e, setPassword, setPasswordError) => {
  setPassword(e.target.value);
  if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
    setPasswordError("Password too short");
  } else if (
    hasWhiteSpaceRegEx.test(e.target.value) &&
    e.target.value.length !== 0
  ) {
    setPasswordError("Password cannot have spaces");
  } else {
    setPasswordError(null); // clear error
  }
};

export const nameInputChanged = (e, setName, setNameError) => {
  setName(e.target.value);
  if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
    setNameError("Name too short");
  } else if (
    !hasWhiteSpaceRegEx.test(e.target.value) &&
    e.target.value.length !== 0
  ) {
    setNameError("Name must include first and last name");
  } else {
    setNameError(null); // clear error
  }
};

export const phoneInputChanged = (e, setPhone, setPhoneError) => {
  setPhone(e.target.value);
  if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
    setPhoneError("Invalid Phone Number");
  } else {
    setPhoneError(null);
  }
};

export const emailInputChanged = (e, setEmail, setEmailError) => {
  setEmail(e.target.value);
  if (e.target.value.length < MIN_CHARS && e.target.value.length !== 0) {
    setEmailError("Invalid Email Address");
  } else if (!hasAtSymbolRegEx.test(e.target.value)) {
    setEmailError("Invalid email address (format: `username@domain.com`");
  } else {
    setEmailError(null); // clear error
  }
};
