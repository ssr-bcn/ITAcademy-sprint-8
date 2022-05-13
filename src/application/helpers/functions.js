const validateUsername = (string, localData) => {
  let error = false;
  let msg = '';
  const usernameInUse = localData.filter( user => user.username === string );

  if ( usernameInUse.length === 1 ) {
    error = true;
    msg = 'Username taken';
  }

  const check = !string || typeof string !== 'string' || string.length < 2;

  if (check) {
    error = true;
    msg = 'Please enter your username (at least, 2 characters)';
  }

  return [error, msg];
}

const validateEmail = (string, localData, validateExists = true) => {
  let error = false;
  let msg = '';

  if (validateExists) {
    const emailInUse = localData.filter( user => user.email === string );

    if ( emailInUse.length === 1 ) {
      error = true;
      msg = 'Email Address taken';
    }
  }
  
  // Patrón extraído de https://www.w3resource.com/javascript/form/email-validation.php
  const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'i');
  const check = !string || typeof string !== 'string' || string.length < 2 || !regex.test(string);

  if (check) {
    error = true;
    msg = 'Please enter a valid email address';
  }

  return [error, msg];
}

const validatePassword = string => {
  const error = !string || typeof string !== 'string' || string.length < 4;
  const msg = error ? 'Please enter your username (at least, 4 characters)' : '';

  return [error, msg];
}

export { validateUsername, validateEmail, validatePassword };
