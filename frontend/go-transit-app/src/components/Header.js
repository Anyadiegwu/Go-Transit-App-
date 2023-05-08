import React from 'react';
import { HiChevronDown } from "react-icons/hi";
import LOGO from '../images/LOGO.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
           <div className='logo'>
            <img src={LOGO} alt='LOGO' />
          </div>
          <div className='navbarBtn'>
            <div className='navbar'>
              <Link to='/'>
              <button>Home</button>
              </Link>
              <Link to='/mybookings'>
                <button>My Bookings</button>
              </Link>
              <Link to='/contact'>
                <button className='button'>Contact<i><HiChevronDown /></i></button>
              </Link>
              <Link to='/signup'>
              <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
    );
}

export default Header;