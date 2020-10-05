import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navigation">
            <div className="main-link">
                <NavLink to="/">Game of Thrones DB</NavLink>
            </div>

            <ul className="links">
                <li>
                    <NavLink to="/characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink to="/houses">Houses</NavLink>
                </li>
                <li>
                    <NavLink to="/books">Books</NavLink>
                </li>
            </ul>
        </nav >
    );
};
export default Header;