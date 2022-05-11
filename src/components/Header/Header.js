import StyledHeader from './Header.styles';
import Navbar from '../Navbar/Navbar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <NavbarMenu />
    </StyledHeader>
  );
}

export default Header;
