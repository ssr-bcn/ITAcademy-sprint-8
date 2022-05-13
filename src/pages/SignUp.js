import Header from '../components/Header/Header';
import RegisterForm from '../components/RegisterForm/Register';

const SignUp = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <RegisterForm />
        </section>
      </main>
    </>
  );
}

export default SignUp;
