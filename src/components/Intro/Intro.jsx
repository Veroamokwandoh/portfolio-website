import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.jpg'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glasses from '../../img/glasses.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am </span>
                <span>Veronica Amokwandoh </span>
                <span>A Frontend Developer with 3 months of experience.
                     I aspire to be a Great Software Engineer</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
       <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={boy} alt="" />
       <img src={glasses} alt="" />
       <div style={{top:'-4%', left: '68%'}}>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
       </div>
       <div style={{top:'18rem', left: 0}}>
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
       </div>
       {/* blur divs */}
      <div className='blur' style={{background: "rgb (238 210 255)"}}></div>
      <div className='blur' style={{background: '#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
       </div>
    </div>
  )
}

export default Intro