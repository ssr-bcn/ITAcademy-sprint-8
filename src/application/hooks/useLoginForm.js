import { useState, useContext } from 'react';
import useLocalStorage from './useLocaleStorage';
import { UserContext } from '../provider';
import { validateEmail, validatePassword } from '../helpers/functions';
import { useNavigate, useLocation } from 'react-router-dom';

const useLoginForm = () => {
  const [, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [localData, setLocalData] = useLocalStorage('users', []);
  const navigate = useNavigate();
  const location = useLocation();

  const checkEmail = string => {
    const [error, msg] = validateEmail(string, localData, false);

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
        !checkEmail(email) &&
        !checkPassword(password) )
    {
      const userExists = localData.filter( user => user.email === email && user.password === password);

      if (userExists.length === 1) {
        const notLoggedUsers = localData.filter( user => !user.logged && user.email !== email );

        setLocalData([
          ...notLoggedUsers,
          {...userExists[0], logged: true}
        ]);
        setUser({...userExists[0], logged: true});

        const to = location.state ? location.state.from.pathname : '/';
        navigate(to);

      } else {
        setPasswordError('There are no users with those credentials')
      }
    }
  }

  return [email, emailError, checkEmail,
          password, passwordError, checkPassword,
          validateSubmit];
}

export default useLoginForm;
