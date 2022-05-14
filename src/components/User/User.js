import { useContext } from 'react';
import { UserContext } from '../../application/provider';
import { useNavigate, useLocation, Link } from "react-router-dom";
import useLocalStorage from '../../application/hooks/useLocaleStorage';
import StyledUser from "./User.styles";

const User = () => {
  const [user, setUser] = useContext(UserContext);
  const [localData, setLocalData] = useLocalStorage('users', []);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const notLoggedUsers = localData.filter( user => !user.logged );

    setLocalData([
      ...notLoggedUsers,
      {...user, logged: false}
    ]);
    setUser({});
    navigate(location.pathname);
  }

  return (
    <StyledUser>
      {
        user.username && 
          <div>
          <p>Hi, {user.username}</p>
          <button onClick={handleClick}>LOG OUT</button>
          </div>
      }
      {
        !user.username &&
          <>
            <Link to="/login">LOG IN</Link><span>{`//`}</span><Link to="/signup">SIGN UP</Link>
          </>
      }
    </StyledUser>
  )
}

export default User;
