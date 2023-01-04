import React from 'react';
import Slider from '../component/Slider'
import coder from '../images/coder.png'
import './Style.css'
import './about.css'
import start from '../images/stars.svg'

import about from '../images/about.png'

function Home(props)
{  

    return(
     <React.Fragment>
         <div className='home'>
         
         <div class="grid-item item2">
            <img  className='boy' src={coder} ></img>
         </div>
         <div class="grid-item item2 line">
            <p className='color '> Hi i'm Chinna Sakthi</p>
            <span className='role'> Developer</span><span className='and color'  >&</span><br></br>
            <span className='role'> Student</span>

         </div>
         <div class="grid-item item1 ">
            
            <span className='role  color'> About Me</span><br></br>
            <div className='content'>
            <p className='para'>Hi there, I'm Chinna sakthi - aka Sakthisaba 👋.I love building high-quality products and bringing them to life through design and code.My strong communication and problem-solving skills allow me to contribute effectively to any project, and I thrive on the opportunity to learn and grow alongside my team. You can find me at the discord, tweeter, instagram.</p> 
            <p className='para'>The main area of my expertise are front-end & design tools like:</p>
            <div class='skill'>
                <p className='list '>•Javascript</p>
                <p className='list '>•Node js</p>
                <p className='list'>•Figma</p>
                <p className='list '>•Java</p>
                <p className='list '>•HTML/CSS</p>
                <p className='list' >•Ajax</p>
            </div>
            </div>
         </div>
         <div class="grid-item">
            <img  className='boy'src={about} ></img>
         </div>
         
         </div>

         
     <Slider/>
     </React.Fragment>
    
    
    );
}

 export default Home;