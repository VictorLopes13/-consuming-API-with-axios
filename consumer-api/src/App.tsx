import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
