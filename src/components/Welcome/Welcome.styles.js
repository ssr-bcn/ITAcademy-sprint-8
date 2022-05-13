import styled from 'styled-components';

const StyledWelcome = styled.div`
  color: #fff;
  text-align: center;

  & h1 {
    font-size: 2.5rem;
  }

  & p {
    font-size: 1.5rem
  }

  & button {
    margin: 0;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 0.3rem;
    background-color: rgb(219, 176, 82);
    font-size: 1rem;
    color: #000;
    text-transform: uppercase;
    transition: box-shadow 0.3s linear;

    &:hover {
      box-shadow: 0 3px 6px 0 rgba(219, 176, 82, 0.3);
    }
  }
`;

export default StyledWelcome;
