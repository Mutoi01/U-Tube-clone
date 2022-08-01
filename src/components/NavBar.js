import React from "react";
import '../style.css'
// import { HashLink as Link } from 'react-router-dom';


function NavBar (){
  return (
    <nav className="nav">
      <a href="/" className="site-title"></a>
     <ul>
       <li>
         
         <a href="/search">Search</a>
       </li>

       <li>
         <a href="/contact">Contact Us</a>
       </li>

       <li>
         <a href="/about">About</a>
       </li>
     </ul>

    </nav>
  )
}

export default NavBar ;