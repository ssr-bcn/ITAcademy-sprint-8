import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { RequireAuth, AvoidIfLogged } from './RequireAuth';
import Home from '../../pages/Home';
import Ships from '../../pages/Ships';
import Ship from '../../pages/Ship';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';

const BrowserConfig = () => {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<RequireAuth><Ships /></RequireAuth>} />
        <Route path="/starship/:id" element={<RequireAuth><Ship /></RequireAuth>} />
        <Route path="/login" element={<AvoidIfLogged><Login /></AvoidIfLogged>} />
        <Route path="/signup" element={<AvoidIfLogged><SignUp /></AvoidIfLogged>} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
        <Route path="*" element={<div>404</div> } />
      </Routes>
    </BrowserRouter>
  );
  }

export default BrowserConfig;
