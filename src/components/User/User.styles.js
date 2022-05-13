import styled from 'styled-components';

const StyledUser = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  letter-space: 2px;
  color: rgb(153, 153, 153);

  & button {
    cursor: pointer;
    width: 100%;
    border: 0;
    background: none;
    font-weight: bold;
    letter-space: 2px;
    }

  & a, & button {
    color: rgb(153, 153, 153);
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }

  & span {
    margin: 0 0.5rem;
  }
`;

export default StyledUser;
