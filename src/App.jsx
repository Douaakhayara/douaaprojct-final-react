import React from 'react';
import Navbar from './component/Navbar';
import Footre from './component/Footre';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from'./pages/Blog'
import Shop from'./pages/Shop'
import Contact from'./pages/Contact'
import Factuer from'./pages/Factuer'
import About from './pages/About';
import Detay from'./pages/detay';
import Shop1 from'./pages/shop1'
import Shop2 from'./pages/shop2'
import Blog1 from './pages/blog1';
import Contact1 from './pages/contact1';




function App() {
  return (
    <>
     <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
          <Route path="/factuer" element={<Factuer/>} />
            <Route path="/shop" element={<Shop/>} />
              <Route path="/blog1/:id" element={<Blog1/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/about" element={<About />} />
              <Route path="/detay/:id" element={<Detay />} />
              <Route path="/shop1" element={<Shop1 />} />
               <Route path="/shop2" element={<Shop2 />} />
               <Route path="/contact1" element={<Contact1/>} />
      </Routes>
      
      <Footre/>
      
    </>
  );
}

export default App;
