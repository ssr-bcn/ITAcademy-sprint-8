import styled from 'styled-components';
import bgCardTop from '../../assets/img/bg-card-top.png';
import bgDetail from '../../assets/img/decal.png';

const StyledShipCard = styled.article`
  position: relative;
  display: flex;
  margin: 0;
  background-color: #282727;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: start;
  } 

  &::after {
    position: absolute;
    display: block;
    content: '';
    left: 0.8rem;
    bottom: 0;
    width: 30px;
    height: 30px;
    background: url(${bgDetail}) top left no-repeat;
    background-size: 300%;
    opacity: 0.06;

    @media only screen and (max-width: 768px) {
      left: auto;
      right: 0.8rem;
    } 
  }

  &:last-child {
    margin: 0;
  }

  & > div, & > figure {
    margin: 0;
    padding: 0;
    width: 50%;

    @media only screen and (max-width: 768px) {
      width: 100%;
    } 
  }

  & > div {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    border-right: 2px solid #9e4f60;
    background: url(${bgCardTop}) top left repeat-x;
    background-size: 7px;

    @media only screen and (max-width: 768px) {
      min-height: 75px;
      border-right: 0;
      border-top: 2px solid #9e4f60;
    } 

    & > header {
      margin: 0 0 0.3rem 0;
      padding: 0;
      font-weight: bold;
      letter-spacing: 1px;
      color: #ddd;
      text-transform: uppercase;
    }

    & > p {
      margin: 0;
      font-size: 0.9rem;
      color: #aaa;
    }
  }

  & > figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: #282727;
    border-radius: 0 0.5rem 0.5rem 0;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
      border-radius: 0.5rem 0.5rem 0 0;
    } 

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & h3, & h5 {
    margin: 0;
  }
`;

export default StyledShipCard;
