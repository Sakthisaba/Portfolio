import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Navbar  from './component/Navbar';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <Home ></Home>
      
    </div>
  );
}

export default App;
