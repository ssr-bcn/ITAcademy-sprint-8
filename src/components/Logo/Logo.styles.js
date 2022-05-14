import styled from 'styled-components';

const StyledLogo = styled.img`
  margin: 0 auto;
  max-height: 88px;

  @media only screen and (max-width: 768px) {
    max-height: 45px;
  }
`;

export default StyledLogo;
