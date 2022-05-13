import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  font-size: 1.2rem;
  color: #aaa;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:hover {
    cursor: pointer;
    color: #fff;

    &::after {
      transform: scaleX(1);
    }
  }

  &::after {
    display: block;
    content: '';
    border-bottom: 1px solid #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

export default StyledButton;
