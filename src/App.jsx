import './App.css';
import { Route, Routes } from 'react-router-dom';

// components
import Home from './pages/home';
import Dillers from './pages/dillers';
import Products from './pages/products';
import Orders from './pages/orders';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dillers' element={<Dillers/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/order/:id' element={<Orders/>} />
        </Routes>  
    </>
  );
}

export default App;
