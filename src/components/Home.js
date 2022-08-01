import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import youtubeImg from '../images/youuttuubbee.jpg'

function Home (){
  return (
<>
  {/* <NavBar /> */}
  
   <div className="container" id = "home">

     <h1>U-TUBE</h1>

     <a href="https://github.com/Mutoi01/U-Tube"> Twitter | Instagram | Discord | Github </a>

     <p>This is a small YouTube clone app. This app uses Youtube Data API v3 to search for topics , courses, Music and soo much more.</p> 

     <img src={youtubeImg} height={500} width={590} alt="YouTube"/> {'\n'}
    
     {/* <button className='btn-2'>Get Started</button> */}
     
   </div>
  </>
  )
}

export default Home;