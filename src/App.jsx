import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/layout';
import Title from './componts/Title/Title';
import Program from './componts/Program/Program';
import About from './componts/About/About';
import Campus from './pages/campus/Campus';
import Testimonials from './componts/Testimonials/Testimonials';
import Contact from './componts/Contact/Contact';
import Morephoto from './componts/Morephoto/Morephoto';
import Undergraduate from './componts/Undergraduate/Undergraduate';
import Postgraduate from './componts/Postgraduate/Postgraduate';
import Online from './componts/Online/Online';
import Allprogram from './componts/Allprogram';
import Btech from './componts/Btech/Btech';

function App() {
  const [playstate, setplaystate] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* 'index' renders Title as the default homepage */}

<Route index element={<Home/>} />
<Route path="program" element={<Program />} />
        <Route path="about" element={<About setplaystate={setplaystate} />} />
        <Route path="campus" element={<Campus />} ></Route>
        
    <Route path='morephoto' element={<Morephoto/>}></Route>
            <Route path='undergraduate' element={<Undergraduate/>}/>
            <Route path='postgraduate' element={<Postgraduate/>}/>
            <Route path='online' element={<Online/>}/>
             <Route path='allprogram' element={<Allprogram/>}/>
            <Route path='btech' element={<Btech/>}/>

        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;