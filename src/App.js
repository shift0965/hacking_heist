
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import TryOn from './components/TryOn';

function App() {

  const [TryOnProduct, setProduct] = useState({
    id: 0,


  });

  return (
    <Router> 
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
          <Route path="/TryOn" element={<TryOn />}/>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
