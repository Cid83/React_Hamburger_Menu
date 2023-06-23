import React from 'react'
import { BsInstagram} from 'react-icons/bs';
import { BsFacebook} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <p>&copy; 2023 burger35.com</p>
           
                <BsInstagram/>
                <BsFacebook/>
                <BsTwitter/>

        </div>
    </div>
  )
}

export default Footer