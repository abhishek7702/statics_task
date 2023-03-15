import React from 'react'
import logo from '../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput,InputAdornment } from '@mui/material';



function header(){ 
  return (
    <div className="headerDiv">
     <img src={logo} alt="company logo"></img>
    

<OutlinedInput
            id="outlined-adornment-password"
              type="outlined"
            endAdornment={
              <InputAdornment position="end" style={{ borderRadius:"50px"}}  >
                <SearchIcon />
             </InputAdornment>
            }
             />
<div>

<ul>

  <li> Study</li>
  <li>  Writing</li>
  <li>Homework Help</li>
  <li>Blog</li>

</ul>


</div>
 <div className='headerbtn'>
<button  className='button' style={{background:"white",color:"blue"}}> pricing</button>
<button className='button'>sign in</button>
</div>
    
    </div>
  )
}

export default header
