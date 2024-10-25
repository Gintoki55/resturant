import React from 'react'
import './footer.css'
import InstaIcon from '../../icons/insta'
import TwitterIcon from '../../icons/twitter'
import FacebookIcon from '../../icons/facebook'
function Footer() {
  return (
    <div className='footer'>

            <div className='footer_left'>
                <div className='brand_footer'>Foodieland<span>.</span></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                </p>
            </div>

            <div className='footer_right'>
                <ul className='footer_list'>
                    <li className='footer_item'>Recipes</li>
                    <li className='footer_item'>Blog</li>
                    <li className='footer_item'>Contact</li>
                    <li className='footer_item'>About us</li>
                </ul>
            </div>

            <div className='vector'></div>


            <div className='copyright'>
                © 2020 Flowbase. Powered by <span className='span'>Webflow</span>
            </div>
              <div className='social_footer'>
                <FacebookIcon />
                <TwitterIcon />
                <InstaIcon />
            </div>

       </div>
  )
}

export default Footer;