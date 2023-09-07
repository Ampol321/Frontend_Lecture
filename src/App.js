import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './components/Create';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Create/> */}
        <Nav />
      </div>
    </Router>
  );
}

export default App;
