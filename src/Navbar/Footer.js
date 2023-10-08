import './Footerstyle.css'
import { FaHome } from 'react-icons/fa';

const  Footer= () => {

return(
<div   className='footer'>
<div   className='=footer-container'>
 <div  className=' left'>
    
<div  className='location'>    

<FaHome   size={20}  style={{color: "#fff" , marginRight: "2rem"}}/>

<div>


    <p>no 3981 Ayyapakkam </p>
    <p>chennai </p>




</div>
</div>

<div className='phone'>  </div>


</div>   




 <div  className=' right'></div>      
    
    
    
</div>


</div>
  
)
}

export default Footer;