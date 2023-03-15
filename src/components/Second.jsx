/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import  image from'./smartStudy.svg'
import group from './Group 513.png'
import question from './Question.png'
import convenience from './convenience.png'
function Second() {
  return (
<div className="secondDiv" style={{margin:"20px"}}>
 <div className="secinnerparent">
   <div style={{display:"flex",flexDirection:"row"}}>
       <img src={image} alt="not visible"style={{marginBottom:"50px"}}></img>
       <div style={{display:"flex",flexDirection:"column" ,marginTop:"50px",textAlign:"center",alignItems:"center"}}>
       <h2 style={{marginLeft:"200px"}}>Study-smart using our study resources</h2>
       <p style={{width:"50%",textAlign:"center",marginLeft:"20%",color:"#89898b"}}>Improve your grades with Desklib by exploring millions of solved questions and class notes shared by thousands of students all over the world.
       Get immediate access to any solution and learning resources by choosing a plan suitable to your needs.
       Become a contributor by sharing your documents and study materials and helping fellow students.
       Earn free access to any solution from our library using our free plans.</p>
       </div>
  </div>

  <div className="secondInner"style={{margin:"40px"}}>
     <div classNAme="secinnerchild">
        <img src={group}></img>
        <h3 >top study resources</h3>
        <span style={{display:"flex",color:"#89898b"}}>Explore our digital database for millions of homework solutions.</span>
     </div>
     <div classNAme="secinnerchild" >
     <img src={question}></img>
         <h3>Ask an expert</h3>
         <span style={{display:"flex",color:"#89898b",}}> Get connected to an expert and ask any question or doubts.</span>
     </div>
     <div classNAme="secinnerchild" >
     <img src={convenience}></img>
        <h3>Book a session</h3>
        <span style={{ display:"flex",color:"#89898b" ,}}>
          Learn directly from specialists in an interactive live video session.</span>
     </div>
   </div>
</div>

</div>
  )
}

export default Second
