import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const fromLocalStorage = () => {
    const item = window.localStorage.getItem('users');

    if (item) {
      const parsed = JSON.parse(item);
      const logged = parsed.filter( user => user.logged );
      
      return logged.length === 1 ? logged[0] : [];
    }

    return []
  }

  const [user, setUser] = useState(fromLocalStorage());

  return (            
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>  
  );
}

export { UserProvider, UserContext };
