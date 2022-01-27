import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listUserTasks } from '../../actions/task.action';
import './Dashboard.scss';
import DoughnutChart from './chart';

const DashboardPage = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const userTasksList = useSelector(state => state.userTasksList);
    const { loading, tasks, error } = userTasksList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUserTasks(userInfo._id));

        return () => {
        };
    }, []);

    const date = new Date().toLocaleString('default', {day: 'numeric', month: 'short', year: '2-digit' });

    const tasksCount = tasks.length;

    const tasksFinished = () => {
        let i = 0;
        tasks.map(task => task.status === 3 ? i++ : <></> )
        return i;
    }

    const tasksInProgress = () => {
        let i = 0;
        tasks.map(task => task.status === 2 ? i++ : <></> )
        return i;
    }

    const percTasks = () => {
        console.log("Jestem tutej " + tasksFinished() + " " + tasks.length);  
        let finish = tasksFinished();
        let allTasks = tasks.length;
        let perc = (100 * finish)/allTasks;
        return perc.toFixed(0);
    }

    const [chartData, setChartData] = useState({})
      

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
                            <p>{percTasks()}% tasks done</p>
                            <div className="chart"><DoughnutChart tasksOvr={tasksCount} tasksFin={tasksFinished()}/></div>
                        </div>
                        <div className="summary-double">
                            <div>{tasksFinished()} tasks finished</div>
                            <div>{tasksInProgress()} tasks in progress</div>
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