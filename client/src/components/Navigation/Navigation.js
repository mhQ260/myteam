import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.scss';
import Logo from '../../img/aside_logo.svg';

const toggleMenu = () => {
    document.querySelector(".fa-bars").classList.toggle("hidden");
    document.querySelector(".fa-times").classList.toggle("hidden");
    document.querySelector("aside").classList.toggle("show");
    document.body.classList.toggle('lock-scroll');
}

const Navigation = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const signoutHandler = () => {
        window.location.reload(true);
    }

    useEffect(() => {
        //
    }, []);

    return (
        userInfo ?
        <nav>
            <div className="banner">MyTeam</div>
            <div className="navigation">
                <Link to="/" className="navigation-el"><i class="fas fa-chart-bar"></i> Dashboard</Link>
                <Link to="/projects" className="navigation-el"><i class="fas fa-layer-group"></i> Projects</Link>
                <Link to="/tasks" className="navigation-el"><i class="fas fa-tasks"></i> Tasks</Link>
                <Link to="/tasks" className="navigation-el"><i class="fas fa-handshake"></i> Clients</Link>
                <Link to="/reports" className="navigation-el"><i class="fas fa-inbox"></i> Reports</Link>
                <Link to="/manage" className="navigation-el"><i class="fas fa-cog"></i> Manage</Link>
                <Link to="/account" className="navigation-el"><i class="fas fa-user-cog"></i> Account</Link>
                <Link to="/" onClick={signoutHandler} className="navigation-el"><i class="fas fa-sign-out-alt"></i> Sign Out</Link>
            </div>   
            <div className="menu-burger">
                <div className="banner-burger">MyTeam</div>
                <div className="burger-ico">
                    <i className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
                    <i className="fa fa-times hidden" aria-hidden="true" onClick={toggleMenu}></i>   
                </div>
                 
            </div>
            
        </nav>
        :
        <></>
    )
}

export default Navigation;