import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import GlobalContext from './context/state';
import Home from './components/Home';

function App() {
  return (
    <GlobalContext>
      <Home/>
    </GlobalContext>
  );
}

export default App;
