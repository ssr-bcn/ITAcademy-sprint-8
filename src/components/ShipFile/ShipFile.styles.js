import styled from 'styled-components';
import bgCardTop from '../../assets/img/bg-card-top.png';
import bgDetail from '../../assets/img/decal.png';

const StyledShipFile = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
  width: 100%;
  color: #aaa;

  &::after {
    position: absolute;
    display: block;
    content: '';
    right: 4%;
    bottom: 0;
    width: 47px;
    height: 47px;
    background: url(${bgDetail}) top left no-repeat;
    opacity: 0.06;
  }

  &.error::after {
    display: none;
  }

  & > figure {
    margin: 0;
    border-radius: 1rem 0 0 1rem;
    overflow: hidden;
    width: 50%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > div {
    position: relative;
    padding: 1.5rem;
    border-left: 2px solid #9e4f60;
    width: 49%;
    background: url(${bgCardTop}) top left repeat-x;
    background-size: 7px;
    background-color: #282727;

    &::before,  &::after {
      position: absolute;
      display: block;
      content: '';
      right: -1%;
      width: 2%;
      border-radius: 1rem;
      background-color: #282727;
    }

    &::before {
      top: 0;
      height: 28%;
      background: url(${bgCardTop}) top left repeat-x;
      background-size: 7px;
      background-color: #282727;
    }

    &::after {
      bottom: 0;
      height: 42%;
    }

    & h2 {
      margin: 0;
      text-transform: uppercase;
    }

    & ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
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
 export default StyledShipFile;
