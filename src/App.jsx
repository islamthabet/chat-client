import {BrowserRouter} from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Routes from './core/Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Loading />
    </BrowserRouter>
  );
}

export default App;
