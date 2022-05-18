import StyledLoader from "./Loader.styles";
import LoaderImg from '../../assets/img/loader-empire.png';

const Loader = ({ bg}) => {
  return (
    <StyledLoader bg={bg}>
      <img src={LoaderImg} alt="Loading" />
    </StyledLoader>
  );
}

export default Loader;
