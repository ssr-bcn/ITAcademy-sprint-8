import StyledNavbar from "./Navbar.styles";
import User from "../User/User";
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <StyledNavbar className="container">
      <Logo height="88" align="center" />
      <User />
    </StyledNavbar>
  );
}

export default Navbar;
