import logo from './logo.svg';
import './App.css';
import { Menu } from './Menu.js';
import { PelisSearch } from './pelisSearch';

function App() {
  return (
    
    <div className="container">
      <Menu/>
      <PelisSearch/>     
    </div>
  );
}

export default App;
