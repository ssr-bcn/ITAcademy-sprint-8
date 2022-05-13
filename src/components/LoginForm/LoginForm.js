import useLoginForm from '../../application/hooks/useLoginForm';
import StyledLoginForm from './LoginForm.styles';

const LoginForm = props =>  {
  const [email, emailError, checkEmail,
        password, passwordError, checkPassword,
        validateSubmit] = useLoginForm();

  return (
    <StyledLoginForm>
      <h2>Enter your email address and pasword</h2>

      <form>
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
        <input type="submit" name="submit" value="Log in" onClick={validateSubmit} />
      </form>
    </StyledLoginForm>
  );
}

export default LoginForm;
