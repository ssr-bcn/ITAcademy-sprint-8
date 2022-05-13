import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Welcome />
        </section>
      </main>
    </>
  );
}

export default Home;
