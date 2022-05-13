import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Ships from '../pages/Ships';
import Ship from '../pages/Ship';

const BrowserConfig = () => (
  <BrowserRouter>
    <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/starships" element={<Ships />} />
      <Route path="/starship/:id" element={<Ship />} />
      { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
      <Route path="*" element={<div>404</div> } />
    </Routes>
  </BrowserRouter>
);

export default BrowserConfig;
