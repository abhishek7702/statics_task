/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className="footerDiv">
       <div style={{display:"flex", flexDirection:"row"}}>  
       <div className="innerDiv">
    <h3>Subjects</h3>
      <a href ="#">Business Management</a>
      <a>Art & Design</a>
      <a>Computer Science</a>
      <a>Education & Teaching</a>
      <a>Engineering</a>
      <a>Health & Medicine</a>
      <a>humanities</a>
      <a>Mathematics</a>
      <a>program</a>
      <a>science</a>
      <a>social science</a>

<h3 style={{margin:"10%"}}>©2023 | A2Z Pte.Ltd. | All rights reserved</h3>
       </div>
<div  className="innerDiv">
<div className="innerDiv">
     <h3>
        pages
    </h3>
    <a href="#">homework help</a>
    <a>study resources</a>
    <a>blogs</a>
    <a>writing</a>
    <a>subscription</a>
   
</div>

<div className="innerDiv">
<h3>
    tools
</h3>
 <a href="#">grammer checker</a>
 <a href="#">plagiarism checker</a>
</div>
</div>
</div>

<div className="innerDiv">
    <h3> support</h3>
    <a href="#">about us</a>
    <a href="#">contact us</a>
    <a href="#">copyright</a>
    <a href="#">terms of use</a>
    <a href="#">privacy policy</a>
    </div>

<div className="innerDiv"> 
+1-312 997 5479
<p>Chat with our experts. we are online and ready to help</p>
<h3>Follow us</h3>
<div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<span><InstagramIcon/></span><span><FacebookIcon/></span>
<span><RedditIcon/></span><span><LinkedInIcon/></span><span><TwitterIcon/></span>
</div>

</div>



    </div>
  )
}

export default Footer
