import logo from './logo.svg';
import './App.css';
import P1 from './components/p1'
import P2 from './components/p2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <P1 />
        <P2 />
        
      </header>
    </div>
  );
}

export default App;
