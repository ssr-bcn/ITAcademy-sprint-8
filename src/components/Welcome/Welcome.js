import { Link } from 'react-router-dom';
import StyledWelcome from './Welcome.styles';

const Welcome = () => {
  return (
    <StyledWelcome>
      <h1>Welcome to the World of Star Wars</h1>
      <p>Discover the ships that appear in the Star Wars movies</p>
      <Link to="/starships">
        <button>Take off!</button>
      </Link>
    </StyledWelcome>
  );
}

export default Welcome;
