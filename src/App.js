import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import React, { useContext, useEffect } from 'react'
import Instagrambegin from './components/Instagrambegin';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Main from './display/Main';
import Widthstate from './context/widthstate';
import Allproduct from './components/Allproduct';
import Shop from './components/Shop';
import Seclogin from './components/Seclogin';
import Secsignin from './components/Secsignin';
import Addproduct from './components/Addproduct';
import Search from './components/Search';
import Addrecommendation from './components/Addrecommedation';
function App() {
  
  return (
    <>
    <Router>
    <Widthstate>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Main /><Instagrambegin />
      <Footer /></>} />
        <Route path="/checkout" element={<><Navbar /><Checkout /><Instagrambegin />
      <Footer /></>} />
        <Route path="/cart" element={<><Navbar /><Cart /><Instagrambegin />
      <Footer /></>} />
        <Route path="/product" element={<><Navbar /><Allproduct/><Instagrambegin />
      <Footer /></>} />
        <Route path="/shop" element={<><Navbar /><Shop/><Instagrambegin />
      <Footer /></>} />
      <Route path="/replace" element={<><Navbar /><Addproduct/><Instagrambegin />
      <Footer /></>} />
      <Route path="/recommendation" element={<><Navbar /><Addrecommendation/><Instagrambegin />
      <Footer /></>} />
      <Route path="/search" element={<><Navbar /><Search/><Instagrambegin />
      <Footer /></>} />
        <Route path="/login" element={<Seclogin/>} />
        <Route path="/signin" element={<Secsignin/>} />
      </Routes>
      
      </Widthstate>
      </Router>
    </>
  );
}

export default App;
