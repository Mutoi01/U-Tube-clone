import React, { useState } from "react";
import ContactUs from "./ContactUs";
import { App } from "./App";
import Home from "./Home";
import { Route, BrowserRouter  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";



function DisplayVideos (){
 const [active, setActive] = useState ('home')


  return  ( <BrowserRouter>
  <nav className="nav">
      <a href="/" className="site-title"></a>
     <ul>
       <li>
         
    <Link to = "home" onClick={()=>setActive('home')}smooth >Home</Link>
         {/* <a href="/search">Search</a> */}
       </li>

       <li>
    <Link to = "contact"onClick={()=>setActive('contact')} smooth >Contact Us</Link>
         {/* <a href="/contact">Contact Us</a> */}
       </li>

       <li>
    <Link to = "search" onClick={()=>setActive('search')} smooth >Search</Link>
         {/* <a href="/about">About</a> */}
       </li>
     </ul>

    </nav>
  

  {active === "home" &&  <Home /> }
  {active === "contact" &&  <ContactUs /> }
  {active === "search" &&  <App /> }
  
 
  
  </BrowserRouter>
  )
  
}

export default DisplayVideos