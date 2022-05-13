import { useState, useEffect } from 'react';
import useLocalStorage from './useLocaleStorage';
import useFetch from './useFetch';

const endpointShipsList = 'https://swapi.dev/api/starships/';
const endpointShipsIMG = 'https://starwars-visualguide.com/assets/img/';

const ships = {
  count: 0,
  next: 1,
  results: []
};

/**
 * Recupera la información de una nave de Local Storage a partir de un ID
 * 
 * @param {integer} id
 * @returns {object|boolean}
 */
const getShipDataFromLocalStorage = id => {
  if ( !id || !Number.isInteger(+id) ) return false;

  const item = window.localStorage.getItem('ships');

  if (!item) return false;

  const parsed = JSON.parse(item);

  const ship = parsed.results.filter( element => element.id === id);

  return ship && ship.length === 1 ? ship[0] : false;
}

/**
 * Recupera los registros de naves guardadas en Local Storage
 * a partir de un número de página
 * 
 * @param {integer} page 
 * @returns 
 */
const getShipListFromLocalStorage = page => {
  if ( !page || !Number.isInteger(+page) ) return false;

  const item = window.localStorage.getItem('ships');

  if (!item) return false;

  const parsed = JSON.parse(item);

  if (parsed.results.length > (page - 1) * 10) {
    return {
      count: parsed.count,
      next: parsed.count > page * 10 ? page + 1 : null,
      results: parsed.results.slice( 0, page * 10 )
    };
  }

  return false;
}

/**
 * Recupera la información de una nave a partir de un ID.
 * Primero consulta en Local Storage para evitar hacer una llamada a la API.
 *
 * @param {integer} id 
 * @returns {object|boolean}
 */
const useStarship = id => {
  const [ship, setShip] = useState(false);
  const [error, setError] = useState('');
  const [response, status, isPending, setUrl] = useFetch(null);

  useEffect( () => {
    const data = getShipDataFromLocalStorage(id);

    if (data) {
      setShip(data);
    } else {
      const url = endpointShipsList + id;
      setUrl(url);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect( () => {
    if ( !isPending ) {
      if ( response && !status.error ) {
        response.json().then( data => setShip(data) );
      } else {
        setError(status.msg);
      }
    }
    // eslint-disable-next-line
  }, [isPending]);

  return [ship, error, isPending];
}

/**
 * Recupera el listado de naves.
 * Por defecto se recupera la información disponible en Local Storage
 * para evitar llamadas continuas a la API.
 * 
 * A la información guardada en Local Storage se le asigna una caducidad
 * de 5 minutos para este ejercicio
 * 
 * @returns {array} ¿Cómo se documentaría?
 */
const useStarshipsEndPoint = () => {
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState('');
  const [shipsList, setShipsList] = useLocalStorage( 'ships', ships, 5);
  const [shipsToRender, setShipsToRender] = useState(ships);
  const [response, status, isPending, setUrl] = useFetch(null);

  useEffect( () => {
    if ( asking && Boolean(shipsToRender.next) ) {
      const data = getShipListFromLocalStorage(shipsToRender.next);

      if (data) {
        setShipsToRender(data);
        setAsking(false);
      } else {
        setUrl(endpointShipsList + '?page=' + shipsToRender.next);
      }
    } else {
      setAsking(false);
    }
    // eslint-disable-next-line
  }, [asking]);

  useEffect( () => {
    if ( !isPending && response ) {
      if (!status.error) {
        response.json().then( data => {
          const results = data.results.map( ship => {
            const id = getShipID(ship.url);
            return { ...ship, id};
          });

          const next = getPage(data.next);

          setShipsToRender({
            count: data.count,
            next,
            results: [ ...shipsToRender.results, ...results]
          })

          setShipsList({
            count: data.count,
            next,
            saved: Date.now(),
            results: [ ...shipsList.results, ...results]
          });
        });
      } else {
        setError(status.msg);
      }

      setAsking(false);
    } else {
      setError(status.msg)
    }

    // eslint-disable-next-line
  }, [isPending]);

  return [asking, setAsking, error, shipsToRender];
}

/**
 * Recupera el siguiente número de página de la API
 * @param {string} url 
 * @returns {integer|boolean}
 */
 const getPage = url => {
  const regex = new RegExp(/^https:\/\/swapi\.dev\/api\/starships\/\?page=(\d+)$/, 'i');

  if ( !Boolean(url) || !String(url) || !regex.test(url) ) return false;

  const matches = url.match(regex);

  return matches ? +matches[1] : false;
}

/**
 * Recupera el ID de una nave a partir de una URL
 * @param {string} url 
 * @returns {integer|boolean}
 */
const getShipID = url => {
  const regex = new RegExp(/^https:\/\/swapi\.dev\/api\/starships\/(\d+)\/$/, 'i');

  if ( !url || !String(url) || !regex.test(url) ) return false;

  const matches = url.match(regex);
  
  return matches ? matches[1] : false;
}

/**
 * Determina la imagen de una nave a partir de su ID.
 * Hace una llamada a starwars-visualguide.com para comprobar
 * si existe una imagen asociada al ID facilitado.
 * Si no existe, se usa una imagen por defecto de esa misma web.
 * Se devuelve una URL.
 * 
 * @param {integer} id 
 * @returns {string}
 */
const useStarshipsIMGEndPoint = id => {
  const fallback = `${endpointShipsIMG}big-placeholder.jpg`;
  const [response, status, isPending, setUrl] = useFetch(null);
  const [img, setImg] = useState(false);

  useEffect( () => {
    if ( id && Number.isInteger(+id) ) {
      const testUrl = `${endpointShipsIMG}starships/${id}.jpg`;
      setUrl(testUrl);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect( () => {
    if ( !isPending ) {
      response && !status.error ? setImg(response.url): setImg(fallback);
    }
    // eslint-disable-next-line
  }, [isPending]);

  return img;
}

export { useStarshipsEndPoint, useStarshipsIMGEndPoint, useStarship };
