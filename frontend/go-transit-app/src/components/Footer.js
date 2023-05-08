import React from 'react';
import '../styles/Footer.css';
import FooterLogo from '../images/FooterLogo.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <div className='footer-wrapper'>
        <div className='footer'>
            <div className='footerLogo'>
                <img src={FooterLogo} alt='Logo' />
            </div>
            <div className='footerLinks'>
                <ul>Company
                    <li><Link to="hf">About Us</Link></li>
                    <li><Link to="f">Team</Link></li>
                </ul>
                <ul>Experience
                    <li><Link to="">FAQs</Link></li>
                    <li><Link to="">Find a terminal</Link></li>
                    <li><Link to="">Help</Link></li>
                    <li><Link to="">Blog</Link></li>
                </ul>
                <ul>Terms
                    <li><Link to="">Privacy Policy</Link></li>
                    <li><Link href=''>Terms & Conditions</Link></li>
                </ul>
            </div>
            <div className='footerIcons'>
                <div>     
                    <Link to=""><img src={facebook} alt='facebook'/></Link>    
                </div>
                <div>
                    <Link to=""><img src={instagram} alt='instagram'/></Link>
                </div>
                <div>
                    <Link to=""><img src={twitter} alt='twitter'/></Link>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Footer;