import React from 'react'
import InstaIcon from '../../icons/insta'
import TwitterIcon from '../../icons/twitter'
import FacebookIcon from '../../icons/facebook'
import './navigation.css'
function Navigation() {
  return (
    <div className='nav_container'>
        <div className='brand_nav'>Foodieland<span>.</span></div>
        <div className='group_nav'>
            <ul className='nav_list'>
                <li className='nav_item'>Home</li>
                <li className='nav_item'>Recipes</li>
                <li className='nav_item'>Blog</li>
                <li className='nav_item'>Contact</li>
                <li className='nav_item'>About us</li>
            </ul>
        </div>
        <div className='social_nav'>
           
          
           <FacebookIcon />
            <TwitterIcon />
           <InstaIcon />
        </div>
       
    </div>
    
  )
}

export default Navigation;