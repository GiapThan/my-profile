
import Navigation from './component/Navigation/Navigation.js';
import Home from './component/Home/Home.js';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Home/>}></Route>
        <Route path='/contact' element={<Home/>}></Route>
      </Routes>
      <Navigation/>
    </div>
  );
}

export default App;
