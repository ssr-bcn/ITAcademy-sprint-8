import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: ${document.documentElement.getBoundingClientRect().height}px;
  background-color: rgba(0, 0, 0, 0.7);

  & > div {
    position: relative;
    display: flex;
    gap: 1.5rem;
    position: relative;
    padding: 1.5rem 1.5rem 1.2rem;
    width: 90%;
    max-width: 600px;
    max-height: 90%;
    border-radius: 0.5rem;
    background-color: #181818;
    color: #aaa;
    overflow-y: auto;

    @media only screen and (max-width: 600px) {
      flex-wrap: wrap;
      align-items: center;
    }

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

    & > figure, > article {
      width: 50%;

      @media only screen and (max-width: 600px) {
        flex: 1 0 100%;
      }
    }

    & > figure {
      margin: 0;
      padding: 0;

      & img {
        border-radius: 0.5rem;
        width: 100%;
      }
    }

    & > article {
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
          flex: 1 0 100%;

          @media only screen and (max-width: 600px) {
            flex: 1 0 50%;
          }

          & span {
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default StyledModal;
