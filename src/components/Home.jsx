import React from 'react'
import image1 from  './askPic.svg'
import image2 from  './askBold.svg'
import image3 from './askmenu.svg'
import image5 from './download.jpeg'



function Home() {
  return (
    <div className='homeDiv' style={{margin:"20px"}}>
      <div style={{display: "flex", justifyContent:"space-between" ,flexDirection:"row"}}>
        <div>
      <h2 style={{background:"blue"}}>Study better together</h2>
      <p>Access millions of verified study materials from students.
       Get 24/7 homework help from verified subject experts.</p>
     
       <div>
  <h1 style={{color: "#405fbd"}}>Study better together</h1>
  <p>Access millions of verified study materials from students.</p>
<p>Get 24/7 homework help from verified subject experts.</p>
<div style={{background:"",height:"20%"}}>
<h3 style = {{color:"#405fbd"}}>Ask a question</h3>
<div style={{background:"#f1fbee",height:"20%", width: "20%"}}>
<span>Type your question or attach a picture here.</span>
<div style={{ marginTop:"120px", display:"flex",justifyContent:"space-between",width:"70%"}}>

  <img src={image1}/>
  <img src={image2}/>
  <img src={image3}/>
</div>
  </div>
  </div>
  </div>
  
</div>
<div style={{height:"250px"}}>
<img src={image5}></img>
</div>
</div>
     </div>
  )
}

export default Home
