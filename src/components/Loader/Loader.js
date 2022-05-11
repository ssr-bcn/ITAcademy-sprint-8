import StyledLoader from "./Loader.styles";
import LoaderImg from '../../assets/img/loader-empire.png';

const Loader = () => {
  return (
    <StyledLoader>
      <img src={LoaderImg} alt="" />
    </StyledLoader>
  );
}

export default Loader;
