import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Register from './pages/Register';
import Buy from './pages/Buy';




function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Buy' element={<Buy/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
