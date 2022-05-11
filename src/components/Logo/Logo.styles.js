import styled from 'styled-components';

const StyledLogo = styled.img`
  margin: 0 auto;
  max-height: ${ props => props.height || 0 };
`;

export default StyledLogo;
