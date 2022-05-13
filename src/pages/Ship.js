import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShipFile from '../components/ShipFile/ShipFile';

const Ship = () => {
  const {id} = useParams();

  return (
    <>
      <Header />
      <main>
        <section className="container">
          <ShipFile id={id}/>
        </section>
      </main>
    </>
  );
}

export default Ship;
