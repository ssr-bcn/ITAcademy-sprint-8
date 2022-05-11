import StyledLogo from "./Logo.styles";
import LogoSrc from '../../assets/img/sw_logo.png';

const Logo = ({ height }) => {
  return (
    <StyledLogo src={LogoSrc} height={height} alt="Star Wars" />
  );
}

export default Logo;
