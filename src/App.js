import BrowserConfig from './application/routes/routes';
import { UserProvider } from './application/provider';

const App = () => {
  return (
    <UserProvider>
      <BrowserConfig />
    </UserProvider>
  );
}

export default App;
