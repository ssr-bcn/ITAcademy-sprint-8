import useRegisterForm from '../../application/hooks/useRegisterForm';
import StyledRegisterForm from './Register.styles';

const RegisterForm = () => {
  const [username, usernameError, checkUsername,
        email, emailError, checkEmail,
        password, passwordError, checkPassword,
        validateSubmit] = useRegisterForm();

  return (
    <StyledRegisterForm>
      <h2>Create your account</h2>

      <form>
        <div className={usernameError ? 'error' : null}>
          <input type="text" name="username" value={username} 
            onChange={e => checkUsername(e.target.value)} placeholder="User Name" 
            className={username && !usernameError ? 'fullfilled' : ''}
            />
          {
            Boolean(usernameError) && <p>{usernameError}</p>
          }
        </div>
        <div className={emailError ? 'error' : null}>
          <input type="text" name="email" value={email} 
            onChange={e => checkEmail(e.target.value)} placeholder="Email Address" 
            className={email && !emailError ? 'fullfilled' : ''}
            />
          {
            Boolean(emailError) && <p>{emailError}</p>
          }
        </div>
        <div className={passwordError ? 'error' : null}>
          <input type="password" name="password" value={password} 
            onChange={e => checkPassword(e.target.value)} placeholder="Password" 
            className={password && !passwordError ? 'fullfilled' : ''}
            />
          {
            Boolean(passwordError) && <p>{passwordError}</p>
          }
        </div>
        <input type="submit" name="submit" value="Create Account" onClick={validateSubmit} />
      </form>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
