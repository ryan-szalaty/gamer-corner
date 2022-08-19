import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Register />
        <Test />
      </header>
    </div>
  );
}

export default App;

//API KEY 8a34cd1429d14236a077d390be68466c
