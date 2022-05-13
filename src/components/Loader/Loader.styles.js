import styled from 'styled-components';

const StyledLoader = styled.div`
  align-self: center;
  position: relative;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -7px;
    width: 54px;
    height: 54px;
    border: 3px solid #fff;
    border-top-color: ${props => props.bg ?? '#151515'};
    border-radius: 50%;
    animation: loading 3.5s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -14px;
    left: -14px;
    width: 68px;
    height: 68px;
    border: 3px solid #fff;
    border-top-color: ${props => props.bg ?? '#151515'};
    border-right-color: ${props => props.bg ?? '#151515'};
    border-radius: 50%;
    animation: loadingLeft 2s linear infinite;
  }

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadingLeft {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default StyledLoader;
