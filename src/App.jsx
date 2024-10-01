
import './App.css'
import Cart from './components/Cart';

import Products from './components/Products'
import Header from './Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
    
      {/* <Header />
    <div className='max-w-[1280px] m-auto'>
    <Products />
    </div> */}


<Router> 
      <Header />
      <div className='max-w-[1280px] m-auto'>
        <Routes>
         
          <Route path="/" element={<Products />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
