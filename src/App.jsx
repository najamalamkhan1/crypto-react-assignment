import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Crypto from './Components/Crypto';
import About from './Components/About';
import Cryptodetails from './Components/Cryptodetails';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="crypto/:cryptodetails" element={<Cryptodetails />} />
        <Route path="/aboutus" element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
