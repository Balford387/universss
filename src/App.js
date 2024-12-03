import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Navba from './components/Navba';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App" >
        <Navba/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
