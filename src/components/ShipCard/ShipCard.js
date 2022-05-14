import { Link } from 'react-router-dom';
import { useStarshipsIMGEndPoint } from '../../application/hooks/useSWApi';
import StyledShipCard from "./ShipCard.styles";
import Loader from '../Loader/Loader';

const StarshipCard = ({ ship }) => {
  const img = useStarshipsIMGEndPoint(ship.id);

  return (
    <Link to={'/starship/' + ship.id} className="linkCard">
      <StyledShipCard>
        <div>
          <header>{ship.name}</header>
          <p>{ship.model}</p>
        </div>
        <figure>
          {
            img && <img src={img} alt="" />
          }
          {
            !img && <Loader bg="#282727" />
          }
        </figure>
      </StyledShipCard>
    </Link>
  );
}

export default StarshipCard;
