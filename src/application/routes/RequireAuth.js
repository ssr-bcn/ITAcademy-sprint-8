import { useContext } from 'react';
import { UserContext} from '../provider';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const [user] = useContext(UserContext);
  const location = useLocation();

  return (
    user && user.logged
      ? children
      : <Navigate to="/login" state={{ from: location }} />
  );
}

const AvoidIfLogged = ({ children }) => {
  const [user] = useContext(UserContext);
  const location = useLocation();
  const to = location.state ? location.state.from.pathname : '/';

  return (
    user && user.logged
      ? <Navigate to={to} state={{ from: location }} />
      : children
  );
}

export { RequireAuth, AvoidIfLogged };
