import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.scss';

const ManagePage = () => {
    return (
        <div className="manage">
            <div className="manage-header"><h1>Manage Panel</h1></div>
            <div className="manage-container">
                <Link to="/manage/users" className="navigation-el"><div><i class="fas fa-users"></i> Users</div></Link>
                <Link to="/manage/projects" className="navigation-el"><div><i class="fas fa-project-diagram"></i> Projects</div></Link>
                <Link to="/manage/clients" className="navigation-el"><div><i class="fas fa-handshake"></i> Clients</div></Link>
                <Link to="/manage/stats" className="navigation-el"><div><i class="fas fa-chart-bar"></i> Stats</div></Link>
                <Link to="/manage/settings" className="navigation-el"><div><i class="fas fa-cogs"></i> Settings</div></Link>
                <Link to="/manage/support" className="navigation-el"><div><i class="fas fa-headset"></i> Support</div></Link> 
                <Link to="/manage/about" className="navigation-el"><div><i class="fas fa-info"></i> About</div></Link>
            </div>
        </div>
    )
}

export default ManagePage;  