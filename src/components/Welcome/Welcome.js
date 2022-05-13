import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../application/provider';
import StyledWelcome from './Welcome.styles';

const Welcome = () => {
  const [user] = useContext(UserContext);

  return (
    <StyledWelcome>
      <h1>Welcome to the World of Star Wars</h1>
      {
        user.username ?
          <p>{user.username}, discover the ships that appear in the Star Wars movies</p>
          :
          <p>Discover the ships that appear in the Star Wars movies</p>
      }
      <Link to="/starships">
        <button>Take off!</button>
      </Link>
    </StyledWelcome>
  );
}

export default Welcome;
