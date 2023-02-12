import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar__wrapper'>
            <div className="link__btns">
                <NavLink to='/Welcome'>Home page</NavLink>
                <NavLink to='/Works'>my works</NavLink>
            </div>
        </div>
    );
}

export default Navbar;