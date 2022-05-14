import StyledLogo from "./Logo.styles";
import LogoSrc from '../../assets/img/sw_logo.png';

const Logo = () => {
  return (
    <StyledLogo src={LogoSrc} alt="Star Wars" />
  );
}

export default Logo;
