import StyledNavbarMenu from "./NavbarMenu.styles";
import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <StyledNavbarMenu>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/starships">Starships</NavLink></li>
      </ul>
    </StyledNavbarMenu>
  );
}

export default NavbarMenu;
