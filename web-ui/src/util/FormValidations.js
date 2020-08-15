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

export const locationNameChanged = (e, setLocationName, setLocationError) => {
  setLocationName(e.target.value);
  // validations - to do
  // existing location name? 
};

export const streetOneChanged = (e, setStreet, setStreetError) => {
  setStreet(e.target.value);
  // validations - to do
  // matches existing street name for current user? 
};

export const streetTwoChanged = (e, setStreet, setStreetError) => {
  setStreet(e.target.value);
  // validations - to do
};

export const zipCodeChanged = (e, setZip, setZipError) => {
  setZip(e.target.value);
  if (e.target.value !== null && e.target.value.length < 5) {
    setZipError("Invalid Zip Code");
  } else {
    setZipError(null);
  }
};

export const cityChanged = (e, setCity, setCityError) => {
  setCity(e.target.value) 
  if (e.target.value !== '' && e.target.value.length < 2) {
    setCityError('Invalid City Name')
  } else {
    setCityError(null)
  }
}


export const locationTypeChanged = (e, setLocationType, setLocationTypeError) => {
  setLocationType(e.target.value) 
  if (e.target.value == null || e.target.value == "") {
    setLocationTypeError(null);
  } else if (!isValidLocationType(e.target.value)) {
    setLocationTypeError("Invalid Location Type");
  } else {
    setLocationTypeError(null);
  }
}

export const locationTypes = [
  "apartment",
  "house",
  "condo",
  "storage unit",
  "garage",
  "other",
];

const isValidLocationType = (locationType) => {
  locationTypes.forEach(type => {
    if (type == locationType) return true 
  }) 
  return false 
}