import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';
import Logo from '../../img/aside_logo.svg';

const Aside = () => {

    const closeMenu = () => {
        document.querySelector(".fa-bars").classList.remove("hidden");
        document.querySelector(".fa-times").classList.add("hidden");
        document.querySelector("aside").classList.remove("show");
        document.body.classList.remove('lock-scroll');
    }

    const signoutHandler = () => {
        window.location.reload(true);
    }

    return (
        <aside>
            <div className="aside-container">
                <div className="aside-categories">
                    <Link to="/" className="aside-link" onClick={closeMenu}>Dashboard</Link>
                    <Link to="/projects" className="aside-link" onClick={closeMenu}>Projects</Link>
                    <Link to="/tasks" className="aside-link" onClick={closeMenu}>Tasks</Link>
                    <Link to="/reports" className="aside-link" onClick={closeMenu}>Reports</Link>
                    <Link to="/manage" className="aside-link" onClick={closeMenu}>Manage</Link>
                    <Link to="/account" className="aside-link" onClick={closeMenu}>Account</Link>
                    <Link to="/" onClick={signoutHandler} className="aside-link">Sign Out</Link>
                </div>
            </div>     
        </aside>
    )
}

export default Aside;  