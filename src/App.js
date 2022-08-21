import logo from './logo.svg';
import './App.css';
import Componente_A from './Components/pure/Componente_A';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Componente_A></Componente_A>
      </header>
    </div>
  );
}

export default App;
