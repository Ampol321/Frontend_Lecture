import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './components/Create';
import Nav from './components/Nav';

function App() {
  return (
      <div className="App">
        <Nav />
      </div>
  );
}

export default App;
