import { useState } from 'react';
import { useExtraEndPoint } from '../../application/hooks/useSWApi';
import StyledShipFileExtra from './ShipFileExtra.styles';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const ShipFileExtra = ({ type, data }) => {
  const [results, error] = useExtraEndPoint(data);
  const [popupData, setPopupData] = useState([]);
  const [modal, setModal] = useState(false);

  const HandleClick = e => {
    e.preventDefault();

    const item = results.filter( item => item.url === e.target.href );
    setPopupData(item);
    setModal(true);
  }

  return (
    <StyledShipFileExtra>
      {
        results.length === 0 &&
          <div className="spacer">
            <Loader />
          </div>
      }
      {
        results.length > 0 &&
          <>
            <h4>{type === 'films' ? 'Appearences' : 'Pilots'}</h4>
            <p>
              {
                type === 'films' && results.map( movie => {
                  const date = movie.release_date.split('-');
                  return <a key={movie.id} href={movie.url} onClick={HandleClick}>{movie.title} (Episode {movie.episode_id} - {date[0]})</a>;
                })
              }
              {
                type === 'pilots' && results.map( pilot => {
                  return <a key={pilot.id} href={pilot.url} onClick={HandleClick}>{pilot.name}</a>;
                })
              }
            </p>
          </>
      }
      {
        error &&
          <p>{error.toString()}</p>
      }
      {
        modal && popupData.length === 1 && <Modal data={popupData} setModal={setModal} />
      }
    </StyledShipFileExtra>
  );
}

export default ShipFileExtra;
