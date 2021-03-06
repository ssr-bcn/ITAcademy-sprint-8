import styled from 'styled-components';

const StyledShipFileExtra = styled.div`
  padding: 1rem;

  & h4 {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
  }

  & > p {
    margin: 0.3rem 0 0;

    & > a {
      font-size: 0.85rem;
      font-weight: bold;
      color: #9e4f60;
      text-decoration: none;

      &::after {
        content: ', ';
        color: #aaa;
      }

      &:last-child {
        &::after {
          content: '';
        }
      }

      &:hover {
        color: rgb(183, 104, 121);
      }
    }
  }
`;

export default StyledShipFileExtra;
