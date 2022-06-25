
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import TryOn from './components/TryOn';
import SignIn from './components/SignIn';

function App() {


  const [signPage, setSignPage] = useState();
  const [firstTryOn, setFirstTryOn] = useState({
    name: '',
    price: '',
    color: [''],
    size: ['']
  });

  const setSignOpen = () => {
    setSignPage(true);
  }
  const setSignClose = () => {
    setSignPage(false);
  }

  return (
    <Router> 
      <div className="App">
        <Header setSignOpen={setSignOpen}/>
        {signPage ? <SignIn setSignClose={setSignClose}/>:<div></div>}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/ShoppingCart" element={<ShoppingCart setFirstTryOn={setFirstTryOn}/>}/>
          <Route path="/TryOn" element={<TryOn firstTryOn={firstTryOn}/>}/>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
