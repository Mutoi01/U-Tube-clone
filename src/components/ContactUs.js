import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';


function ContactUs (){


  return ( 
    <>

    {/* <NavBar /> */}

   <div className="container" id="contact">

     <h1>U-Tube Help Center </h1>


     <p>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
    
     <p>Need something? We are here to help!</p>

     <p>Search our FAQs for answers to anything you might be wondering</p>

     <input type='text' placeholder= "Search our articles" className='search-bar ui segment'  />
     <button type="button" className="btn-5" >Search</button>


     {/* <a href="https://github.com/Mutoi01/U-Tube"> Twitter | Instagram | Discord </a> */}
     
   </div>

   </>
  )
}

export default ContactUs