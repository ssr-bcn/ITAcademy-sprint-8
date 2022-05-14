import { useEffect } from 'react';
import { useStarshipsEndPoint } from '../../application/hooks/useSWApi';
import StyledList from './List.styles';
import Loader from '../Loader/Loader';
import ShipCard from '../ShipCard';
import Button from '../Button/Button';

const List = () => {
  const [asking, setAsking, error, shipsToRender] = useStarshipsEndPoint();

  const handleClick = e => {
    e.preventDefault();
    setAsking(true);
  }

  useEffect( () => {
    /**
     * Al montar el componente por primera vez, se hace una primera 
     * llamada a la SWApi únicamente si no hay registros en el estado.
     * Sin esa condición, cada vez que el cliente entrara en la página
     * se activaría la llamada para obtener el siguiente bloque 
     * de resultados sin que se dieran los requisitos 
     * (click en botón o scroll infinito) para ello
     */
    if (shipsToRender.results.length === 0) setAsking(true);
    // eslint-disable-next-line
  }, []);

  return (
    <StyledList>
      {
        shipsToRender.results.length > 0 ?
          shipsToRender.results.map( ship => <ShipCard key={ship.url} ship={ship} />)
          : null
      }
      {
        !asking && shipsToRender.next && 
        <div className="spacer">
          <Button handleClick={handleClick} text="Show more" />
        </div>
      }
      {
        asking && 
        <div className="spacer">
          <Loader />
        </div>
      }
      {
        Boolean(error) && <h1 style={{color: 'white'}}>{error.toString()}</h1>
      }
    </StyledList>
  );
}

export default List;
