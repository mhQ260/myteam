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

    useEffect(() => {
        //
    }, []);

    return (
        <nav>
            <div className="navigation">
                <div className="navigation-el">Dashboard</div>
                <div className="navigation-el">Projects</div>
                <div className="navigation-el">Tasks</div>
                <div className="navigation-el">Reports</div>
                <div className="navigation-el">Manage</div>
                <div className="navigation-el">Account</div>
                <div className="navigation-el">Sign Out</div>
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