import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook1.png'
import twitter from '../assets/icons8-twitter-50.png'
import instagram from '../assets/icons8-instagram-100.png'
import gmail from '../assets/icons8-google-plus-48.png'
import linkedln from '../assets/icons8-linkedin-2-50.png'
import arrow_top from '../assets/icons8-up-squared-30.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-right'>
        <h1>asioso mark</h1>
        <p>Lorem ipsum dolor sit, amet consectofficiis, incidunt atque ratione</p>
        <div className='footer-icons'>
        <img src={facebook} alt='photo' width="20px"/>
        <img src={twitter}  width="20px"/>
        <img src={instagram}  width="20px"/>
        <img src={gmail}  width="20px"/>
        <img src={linkedln}  width="20px"/>
        </div>
        <div className='footer-input'>
          <input placeholder='Enter your Email address'/>
          <button>Submit</button>
        </div>
      </div>
      <div className='footer-left'>
      <div className='popular-categories'>
        <div>
          <h2>Popular Categories</h2>
        </div>
        <ul>
          <li>Marketing</li>
          <hr/>
          <li>SEO services</li>
          <li>Digital Agency</li>
          <li>Make money</li>
          <hr/>
          <li>Blogging</li>
        </ul>
      </div>
      <div className='popular-categories'>
        <div>
          <h2>Copyright</h2>
        </div>
        <ul>
          <li>About us</li>
          <hr/>
          <li>Advertising</li>
          <li>Write for us</li>
          <li>Trademark</li>
          <hr/>
          <li>License & Help</li>
        </ul>
      </div>
      </div>
      <img src={arrow_top} alt='arrow-photo' className='arrow-top' onClick={()=>window.scrollTo(0,0)}/>
    </div>
  )
}

export default Footer