import React,{useEffect} from "react";
import Nav from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import Report from "./components/Report";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])

  return (
    <>
<Nav/>
<Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/reports' element={<Reports/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/report' element={<Report/>}/>
  </Routes>
</Router>
<Footer/>
    </>
  )
}

export default App