import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.scss';

const DashboardPage = () => {

    const loading = false;

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const date = new Date().toLocaleString('default', {day: 'numeric', month: 'short', year: '2-digit' });

    return (
        loading ? <div>Loading...</div>
        :
        <>
            <div className="dashboard">
                <div className="dashboard-header">
                    <div><h2>Hello {userInfo.login}!</h2></div>
                    <div><h2>Today, {date}</h2></div>
                </div>
                <div className="dashboard-container">
                    <div className="dashboard-summary">
                        <div className="summary-diagram">
                            <div>
                                        
                            </div>
                            <p>Tasks done</p>
                        </div>
                        <div className="summary-double">
                            <div>X tasks finished</div>
                            <div>X tasks in progress</div>
                        </div>
                    </div>
                    <div className="dashboard-content">
                        <h2>My activity</h2>
                        <div className="dashboard-activity">
                            <div>L</div>
                            <div>User X added task</div>
                            <div>4m</div>
                        </div>
                        <div className="dashboard-activity">
                            <div>L</div>
                            <div>User X added task</div>
                            <div>9m</div>
                        </div>
                        <div className="dashboard-activity">
                            <div>L</div>
                            <div>User X added task</div>
                            <div>27m</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;  