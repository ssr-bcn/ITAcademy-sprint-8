import styled from 'styled-components';
import BG from '../../assets/img/bg-header.jpg'

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: url(${BG}) center center no-repeat;
  background-size: cover;
  font-size: 0.85rem;
  letter-spacing: 2px;
  `;

export default StyledHeader;
