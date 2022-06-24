
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ShoppingCart from './components/ShoppingCart';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {



  return (
    <Router> 
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
