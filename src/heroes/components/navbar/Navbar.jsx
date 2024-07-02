import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import './navbar.css';
import { Search } from '../index.js';
import { AuthContext } from '../../../auth/context/AuthContext.jsx';

const Navbar = () => {

    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="header">
            <h1><Link 
                className="link-title" 
                to="/"
                >HeroesApp 🦸🏻
                </Link>
            </h1>

            <Search />
            
            <div className="navbar">
                    <span className='user-name--login'>{ user?.name }</span>
                    <NavLink
                        className="link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
            

                    <NavLink 
                        className="link" 
                        to="/login"
                        onClick={ onLogout }
                    >
                        Logout
                    </NavLink>
            </div>
        </nav>
    )
}


export default Navbar