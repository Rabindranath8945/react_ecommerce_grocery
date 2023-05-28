import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SingleProduct from './components/pages/SingleProduct';
import Cart from './components/pages/Cart';
import ErrorPage from './components/pages/ErrorPage';
import { GlobalStyle } from './components/GlobalStyle';


function App() {
  return (
    <>

      <BrowserRouter>
      <GlobalStyle/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
