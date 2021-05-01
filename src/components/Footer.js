import React from 'react'
import '../styles/Footer.css'
import {FacebookFilled, LinkedinFilled, YoutubeFilled, InstagramFilled} from '@ant-design/icons'
const Footer = () => {
    return(
        <div className='footer-body'>
            <hr className='hr' />
            <div className='footer-body-upper'>
                <h3>About us</h3>
                <p> OBS!! This site is a demo and still under construction. We have developed This site using ReactJs, 
                    Spring boot, postgresql and deployed to AWS and Netlify. 
                    You can ask us to get the Login credentials to admin page to test this site. </p>
            </div>
            <div className='footer-body-middle'>
                <FacebookFilled className='social-icon'/>
                <LinkedinFilled className='social-icon'/>
                <YoutubeFilled className='social-icon'/>
                <InstagramFilled className='social-icon'/>
            </div>
            <div className='footer-body-lower'>&#169;2021 Hayder &amp; Leo. All rights reserved</div>
        </div>
    )
}
export default Footer