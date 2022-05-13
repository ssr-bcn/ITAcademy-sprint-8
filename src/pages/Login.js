import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <LoginForm />
        </section>
      </main>
    </>
  );
}

export default Login;
