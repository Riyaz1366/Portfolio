import './imagesStyle.css'

import introimg from '../assest/pageimg.jpg'
import { Link } from 'react-router-dom';

const NavImages = () => {

    return (

        <div className='navimg' >
            <div className='mask'>
                <img className='into-img' src={introimg} alt="introimg"/> </div>

                < div className='content'>

             <h1> React Developer</h1>

             <div>

                 <Link    to="/project"   className='btn'  > Projeccts  </Link>
                 <Link    to="/contact"   className='btn  btn-light'  > Contact  </Link>


             </div>


                </div>


        </div>



    )

}


export default NavImages;