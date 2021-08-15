import React from 'react';
import './Aside.scss';

const Aside = () => {
    return (
        <aside>
            {/* logo do wklejenia na potem */}
            <div className="banner">MHDEV</div>
            <div className="navigation">
                <div className="navigation-el">Dashboard</div>
                <div className="navigation-el">Projects</div>
                <div className="navigation-el">Tasks</div>
                <div className="navigation-el">Reports</div>
                <div className="navigation-el">Manage</div>
                <div className="navigation-el">Account</div>
            </div>   
        </aside>
    )
}

export default Aside;