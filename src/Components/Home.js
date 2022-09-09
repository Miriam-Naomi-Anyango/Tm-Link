import './home.css';
import React from 'react'

function Home (){
  return (
    <div className='top'>
    <div className='Moringa1'>
         <div className ='intro-text'>
           <h6>
               <span className="Moria">Moringa</span>
           </h6>
           <h3>
               <span className="morib">Nurturing Africa's Tech Talent</span>
           </h3>
           <h6>
               Through market-aligned skills traing, we help <br />
               learners build new career possibilities with greater <br />
               confidence and capability. <br />
               {/* <button className ="btn">Enroll Now</button>
               <button className="btn3">Explore</button> */}
           </h6>
       </div>
       <div className="imagioso">
           <img src="https://media.istockphoto.com/photos/hispanic-woman-at-home-working-on-a-computer-picture-id1214389964?k=20&m=1214389964&s=612x612&w=0&h=FV2OMeeL8KF3mfua2Kz76I6adPMXrdJmPc_lnawpfEU=" height="397" width="585" />
       </div>
       </div>
    <hr></hr>
    </div>
  )
}
export default Home;