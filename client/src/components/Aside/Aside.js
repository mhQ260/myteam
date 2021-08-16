import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.scss';
import Logo from '../../img/aside_logo.svg';

const Aside = () => {
    return (
        <aside>
            <div className="aside-container">
                <div className="aside-categories">
                    <NavLink to="#" className="aside-link">Dashboard</NavLink>
                    <NavLink to="#" className="aside-link">Projects</NavLink>
                    <NavLink to="#" className="aside-link">Tasks</NavLink>
                    <NavLink to="#" className="aside-link">Reports</NavLink>
                    <NavLink to="#" className="aside-link">Manage</NavLink>
                    <NavLink to="#" className="aside-link">Account</NavLink>
                </div>
                <div className="aside-banner">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>     
        </aside>
    )
}

export default Aside;  