import React, {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const OverviewComponent = props => {

    return (
        <div className="project-overwiew">
            <div className="overview-summary">
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
            <div className="overview-content">
                <h2>Recent activity</h2>
                <div className="overview-activity">
                    <div>L</div>
                    <div>User X added task</div>
                    <div>4m</div>
                </div>
                <div className="overview-activity">
                    <div>L</div>
                    <div>User X added task</div>
                    <div>4m</div>
                </div>
                <div className="overview-activity">
                    <div>L</div>
                    <div>User X added task</div>
                    <div>4m</div>
                </div>
            </div>
        </div>
      )
}