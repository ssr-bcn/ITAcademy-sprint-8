import { useState, useEffect, useRef } from 'react';

const initialError = {
  error: false,
  msg: ''
};

const useFetch = () => {
  const [url, setUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(initialError);
  const [isPending, setIsPending] = useState(false);

  const componentIsMounted = useRef(false);

  const getData = async url => {
    setIsPending(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      setResponse(response);
      setIsPending(false);
    } catch (err) {
      setResponse(null);
      setError({ error: true, msg: err } );
      setIsPending(false);
    }
  }

  useEffect( () => {
    if (componentIsMounted.current) {
      if ( !url || !String(url) ) {
        const err = { error: false, msg: 'No se ha facilitado una URL válida' };
        setError(err);
      } else {
        getData(url);
      }
    }
    // eslint-disable-next-line
  }, [url]);

  useEffect( () => {
    componentIsMounted.current = true;
  }, []);

  return [response, error, isPending, setUrl];
}

export default useFetch;
