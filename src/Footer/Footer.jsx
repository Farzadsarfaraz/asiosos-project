import React, { useState } from 'react';
import './Footer.css';
import facebook from '../assets/facebook1.png';
import twitter from '../assets/icons8-twitter-50.png';
import instagram from '../assets/icons8-instagram-100.png';
import gmail from '../assets/icons8-google-plus-48.png';
import linkedln from '../assets/icons8-linkedin-2-50.png';
import arrow_top from '../assets/icons8-up-squared-30.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (val) => {
        setEmail(val);
        setError(!val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
    };

    const validEmail = () => {
        if (error) {
            setError("Enter a valid email");
        }else{
            setError("Submitted")
            setEmail('')
        }
    };

    return (
        <div className='footer'>
            <div className='footer-right'>
                <h1>Asioso Mark</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className='footer-icons'>
                    <img src={facebook} alt='Facebook icon' width="20px" />
                    <img src={twitter} alt='Twitter icon' width="20px" />
                    <img src={instagram} alt='Instagram icon' width="20px" />
                    <img src={gmail} alt='Gmail icon' width="20px" />
                    <img src={linkedln} alt='LinkedIn icon' width="20px" />
                </div>
                <div className='footer-input'>
                    <div>
                        <input 
                            placeholder='Enter your Email address' 
                            value={email}
                            onChange={(e) => handleChange(e.target.value)} 
                        />
                        <button onClick={validEmail}>Submit</button>
                    </div>
                    {error && <p>{error}</p>}
                </div>
            </div>
            <div className='footer-left'>
                <div className='popular-categories'>
                    <h2>Popular Categories</h2>
                    <ul>
                        <li>Marketing</li>
                        <hr />
                        <li>SEO Services</li>
                        <li>Digital Agency</li>
                        <li>Make Money</li>
                        <hr />
                        <li>Blogging</li>
                    </ul>
                </div>
                <div className='popular-categories'>
                    <h2>Copyright</h2>
                    <ul>
                        <li>About Us</li>
                        <hr />
                        <li>Advertising</li>
                        <li>Write for Us</li>
                        <li>Trademark</li>
                        <hr />
                        <li>License & Help</li>
                    </ul>
                </div>
            </div>
            <img 
                src={arrow_top} 
                alt='Scroll to top' 
                className='arrow-top' 
                onClick={() => window.scrollTo(0, 0)} 
            />
        </div>
    );
};

export default Footer;