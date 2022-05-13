import { useState } from 'react';

const useLocalStorage = (key, initialValue, expiration = null) => {
  const [storedValue, setStoredValue] = useState( () => {
    try {
      let item = window.localStorage.getItem(key);

      if (item) {
        if (expiration) {
          /**
           * Si la información recuperada de LocalStorage 
           * tiene una antigüedad superior a 5 minutos, se deshecha.
           */
          const now = Date.now();
          const expiration = 5 * 60 * 1000;
          const parsed = JSON.parse(item);

          if (now - parsed.saved > expiration) {
            item = null;
            window.localStorage.removeItem(key);
            return initialValue;
          } else {
            return parsed;
          }
        } else {
          return JSON.parse(item);
        }
      } else {
        return initialValue;
      }
      
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem( key, JSON.stringify(value) );
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
