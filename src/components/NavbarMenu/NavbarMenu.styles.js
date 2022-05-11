import styled from 'styled-components';

const StyledNavbarMenu = styled.nav`
  border-top: 1px solid #343434;
  border-bottom: 1px solid #343434;

  & > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    & > li {
      display: inline-block;
      padding: 0.7rem 1.4rem;
      border-right: 1px solid #343434;
      border-left: 1px solid #343434;
      font-weight: bold;
      text-transform: uppercase;
      
      & > a {
        display: block;
        position: relative;
        text-decoration: none;
        color: rgb(153, 153, 153);

        &.active {
          color: #fff;

          &::after {
            content: ' ';
            position: relative;
            display: block;
            left: 30%;
            bottom: -0.3rem;
            width: 40%;
            border-bottom: 1px solid #fff;
            box-shadow: rgb(158, 79, 96) 0px 0px 6px 3px;
            text-align: center;
          }          
        }
      }
    }
  }
`;

export default StyledNavbarMenu;
