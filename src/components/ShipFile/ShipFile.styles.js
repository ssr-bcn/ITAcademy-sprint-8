import styled from 'styled-components';
import bgCardTop from '../../assets/img/bg-card-top.png';
import bgDetail from '../../assets/img/decal.png';

const StyledShipFile = styled.article`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  color: #aaa;

  &.error::after {
    display: none;
  }

  & > figure {
    margin: 0;
    border-radius: 1rem 0 0 1rem;
    overflow: hidden;
    width: 50%;

    @media only screen and (max-width: 768px) {
      border-radius: 1rem 1rem 0 0;
      width: 100%;
    }
  
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > div.card {
    position: relative;
    padding: 1.5rem;
    border-left: 2px solid #9e4f60;
    width: 49%;
    background: url(${bgCardTop}) top left repeat-x;
    background-size: 7px;
    background-color: #282727;

    @media only screen and (max-width: 768px) {
      border-top: 2px solid #9e4f60;
      border-left: 0;
      border-radius: 0 0 1rem 1rem;
      width: 100%;
    }
    
    &::before,  &::after {
      position: absolute;
      display: block;
      content: '';
      right: -1%;
      width: 2%;
      border-radius: 1rem;
      background-color: #282727;

      @media only screen and (max-width: 768px) {
        display: none;
      }
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

    & > div {
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
    }

    & h2 {
      margin: 0;
      text-transform: uppercase;
    }

    & ul {
      display: flex;
      flex-wrap: wrap;
      gap-row: 1rem;
      list-style: none;
      padding: 0;

      & li {
        padding: 0.2rem 0;
        flex: 1 0 50%;

        @media only screen and (max-width: 600px) {
          flex: 1 0 100%;
        }
  
        & span {
          font-weight: bold;
        }
      }
    }
  }

  & > div.extra {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0 0;
    width: 100%;

    & > div {
      flex: 1 0 50%;
      border-left: 1px solid rgba(255,255,255,0.1);

      @media only screen and (max-width: 600px) {
        flex: 1 0 100%;
        border: 0;
      }

      &:first-child {
        border: 0;
      }

      &:last-child {
        width: 49%;
      }
    }
  }
`;
 export default StyledShipFile;
