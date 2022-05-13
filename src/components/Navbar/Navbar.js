import StyledNavbar from "./Navbar.styles";
import User from "../User/User";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <StyledNavbar className="container">
      <Link to="/">
        <Logo height="88" align="center" />
        </Link>
      <User />
    </StyledNavbar>
  );
}

export default Navbar;
