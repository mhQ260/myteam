import React from 'react';
import './Aside.scss';
import Logo from '../../img/logo.svg';

const Aside = () => {
    return (
        <aside>
            <div className="navigation">
                <div className="navigation-el">Dashboard</div>
                <div className="navigation-el">Projects</div>
                <div className="navigation-el">Tasks</div>
                <div className="navigation-el">Reports</div>
                <div className="navigation-el">Manage</div>
                <div className="navigation-el">Account</div>
            </div>   
            <div className="banner"><img src={Logo} alt="Logo" /></div>
        </aside>
    )
}

export default Aside;