import React from 'react'
import image from'./p1.svg'
import image2  from './p2.svg'
function Last() {
  return (
     
    <div style={{margin:"20px"}}>
    <h1>Our Happy Readers</h1>
<div className='Lastdivchild'>
 <div classsName="Lastdivchildinner">
  <img src={image} alt="not visible"></img>
    <h4>    Linh Susan</h4>
    <span >Homework and assignments solutions at Desklib.com are the best. 
        I personally feel that they have such an excellent collection of study resources.
         I'll surely visit this place again.</span>
  </div>
  <div classsName="Lastdivchildinner">
  <img src={image2} alt="not visible"></img> 
  <h4>   Nita Aloan </h4>
    <span >I would like to thank Desklib library. 
        That's really a great platform for online study resources. 
        I got the best solutions for my assignment.</span>
  </div>
  <div classsName="Lastdivchildinner">
  <img src={image} alt="not visible"></img>
  <h4>   Hasan Aoli </h4>
    <span  >Best homework help website. Hello,
         I got 75 marks in my business research proposal.
          Humbly thanking you guys from the bottom of my heart! Thanks a million!</span>
  </div>



   </div>
   </div>

    
  )
}

export default Last
