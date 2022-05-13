import styled from 'styled-components';

const StyledRegisterForm = styled.div`
  padding: 1.5rem;
  width: 90%;
  max-width: 600px;
  background-color: #181818;

  & h2 {
    margin-top: 0;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    color: #edd700;
  }

  & form {
    display: flex;
    flex-direction: column;

    .error input {
      border: 1px solid red;
      color: red;
    }

    & input {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      width: 100%;

      &.fullfilled:focus {
        border: 1px solid #edd700;
        background-color: #484848;
        color: #edd700;
      }

      &[type=submit] {
        border: 0;
        border-radius: 0.3rem;
        background-color: #484848;
        font-size: 1.1rem;
        color: #f4f5f5;

        &:hover {
          cursor: pointer;
          background-color: #3f6dac;
        }
      }
    }

    & p {
      margin: 1rem 0 0;
      font-size: 0.9rem;
      color: red;
    }
  }
`;
 export default StyledRegisterForm;
 