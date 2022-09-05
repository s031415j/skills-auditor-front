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
                
            </ul>
        </nav>
    )

}

// function CustomLink({href, children, ...props}) {
//     const path = window.location.pathname

//     return (
//         <li className={path === to ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }

export default NavBar;
