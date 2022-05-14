import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  & > div {
    position: relative;
    padding: 1.5rem 1.5rem 1rem;
    width: 90%;
    max-width: 600px;
    border-radius: 0.5rem;
    background-color: #181818;
    color: #aaa;

    & button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.3rem 0.7rem;
      border: 0;
      background: 0;
      font-size: 2.5rem;
      color: #999;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }

    & h3 {
      margin: 0 0 0.5rem;
      text-transform: uppercase;
    }

    & ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;

      & li {
        padding: 0.5rem 0;
        width: 50%;

        & span {
          font-weight: bold;
        }
      }
    }
  }
`;

export default StyledModal;
