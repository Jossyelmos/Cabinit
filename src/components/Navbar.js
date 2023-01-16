import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/Group 3 (2).png'
// import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className='navbar bg-dark'>
            <img src={logo} alt='img' style={{ width: '150px'}}/>
            <ul>
                <li>
                    <a href="/">WHAT WE DO</a>
                </li>
                <li>
                    <a href="/about">SERVICES</a>
                </li>
                <li>
                    <a href="/about">ABOUT US</a>
                </li>
                <li>
                    <a href="/about" className='btn btn-bright btn-sm'>GET IN TOUCH</a>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github-Finder',
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
