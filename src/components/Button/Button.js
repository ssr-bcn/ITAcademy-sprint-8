import StyledButton from './Button.styles';

const Button = ({ handleClick, text }) => {
  return (
    <StyledButton onClick={handleClick}>{text}</StyledButton>
  );
}

export default Button;
