import { useStarship, useStarshipsIMGEndPoint } from '../../application/hooks/useSWApi';
import StyledShipFile from './ShipFile.styles';
import Loader from '../Loader/Loader';
import ShipFileExtra from '../ShipFileExtra/ShipFileExtra';

const ShipFile = ({ id }) => {
  const [ship, error, isPending] = useStarship(id);
  const img = useStarshipsIMGEndPoint(id);

  return (
    <StyledShipFile className={error || isPending? 'error' : null}>
      {
        ship &&
          <>
            <figure>
              {
                img && <img src={img} alt="" />
              }
              {
                !img && 
                <div className="spacer">
                  <Loader />
                </div>
              }
            </figure>

            <div className="card">
              <div>
                <h2>{ship.name}</h2>
                <ul>
                  <li><span>Model:</span> {ship.model}</li>
                  <li><span>Manufacturer:</span> {ship.manufacturer}</li>
                  <li><span>Cargo capacity:</span> {ship.cargo_capacity}</li>
                  <li><span>Cost in credits:</span> {ship.cost_in_credits}</li>
                  <li><span>Consumables:</span> {ship.consumables}</li>
                  <li><span>Crew:</span> {ship.crew}</li>
                  <li><span>Hyperdrive Rating:</span> {ship.hyperdrive_rating}</li>
                  <li><span>Max atmosphering speed:</span> {ship.max_atmosphering_speed}</li>
                  <li><span>Length:</span> {ship.length}</li>
                  <li><span>Passengers:</span> {ship.passengers}</li>
                  <li><span>Starship class:</span> {ship.starship_class}</li>
                </ul>
              </div>
            </div>
            {
              ( ship.pilots.length !== 0 || ship.films.length ) !== 0 &&
                <div className="extra">
                  {
                    ship.pilots.length !== 0 &&
                      <ShipFileExtra type="pilots" data={ship.pilots} />
                  }
                  {
                    ship.films.length !== 0 &&
                      <ShipFileExtra type="films" data={ship.films} />
                  }
                </div>
            }
          </>
      }
      {
        isPending &&
          <div className="spacer">
            <Loader bg="#282727" />
          </div>
  }
      {
        error &&
          <div className="spacer">
            <h2>No result</h2>
          </div>
      }

    </StyledShipFile>
  );
}

export default ShipFile;
