import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='nav'>
            <img className="logo"src={`/images/logo.png`} alt="logo"/>
            <ul>
                <li>
                  <a href='/home'className='items'>Home</a>  
                </li>
                <li>
                  <a href='/directory' className='items'>Directory</a>  
                </li>
                <li>
                  <a href='/addStaff' className='items'>Add Staff</a>  
                </li>
                <li>
                  <a href='/removeStaff' className='items'>Remove Staff</a>  
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;
