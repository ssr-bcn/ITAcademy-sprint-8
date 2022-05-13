import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../provider';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from './useLocaleStorage';
import { validateUsername, validateEmail, validatePassword } from '../helpers/functions';

const useRegisterForm = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [localData, setLocalData] = useLocalStorage('users', []);
  const navigate = useNavigate();
  const location = useLocation();

  const [, setUser] = useContext(UserContext);

  const checkUsername = string => {
    const [error, msg] = validateUsername(string, localData);

    setUsernameError(msg);
    setUsername(string);

    return error;
  }

  const checkEmail = string => {
    const [error, msg] = validateEmail(string, localData);

    setEmailError(msg);
    setEmail(string);

    return error;
  }

  const checkPassword = string => {
    const [error, msg] = validatePassword(string);

    setPasswordError(msg);
    setPassword(string);

    return error;
  }

  const validateSubmit = e => {
    e.preventDefault();

    if (
        !checkUsername(username) &&
        !checkEmail(email) &&
        !checkPassword(password) )
    {
      const newUser = { username, email, password, logged: true };

      setLocalData([
        ...localData,
        newUser
      ]);

      setUser(newUser);

      const to = location.state ? location.state.from.pathname : '/';
      navigate(to);
    }
  }

  return [username, usernameError, checkUsername, 
          email, emailError, checkEmail,
          password, passwordError, checkPassword,
          validateSubmit];
}

export default useRegisterForm;
