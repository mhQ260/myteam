import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.scss';
import Logo from '../../img/aside_logo.svg';

const toggleMenu = () => {
    document.querySelector(".fa-bars").classList.toggle("hidden");
    document.querySelector(".fa-times").classList.toggle("hidden");
    document.querySelector("aside").classList.toggle("show");
}

const Navigation = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        //dispatch(signout());
        window.location.reload(true);
    }

    useEffect(() => {
        //
    }, []);

    return (
        <nav>
            <div className="navigation">
                <Link to="/" className="navigation-el">Dashboard</Link>
                <Link to="/projects" className="navigation-el">Projects</Link>
                <Link to="/tasks" className="navigation-el">Tasks</Link>
                <Link to="/reports" className="navigation-el">Reports</Link>
                <Link to="/manage" className="navigation-el">Manage</Link>
                <Link to="/account" className="navigation-el">Account</Link>
                <Link to="/" onClick={signoutHandler} className="navigation-el">Sign Out</Link>
            </div>   
            <div className="banner"><img src={Logo} alt="Logo" /></div>
            <div className="menu-burger">
                <i className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
                <i className="fa fa-times hidden" aria-hidden="true" onClick={toggleMenu}></i>    
            </div>
            
        </nav>
    )
}

export default Navigation;