import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listUserTasks, saveTask } from '../../actions/task.action';
import './Tasks.scss';

const TasksPage = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const userTasksList = useSelector(state => state.userTasksList);
    const { loading, tasks, error } = userTasksList;

    const usersList = useSelector(state => state.usersList);
    const { loading: loadingUsers, users, error: errorUsers } = usersList;

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("stuk")
        dispatch(listUserTasks(userInfo._id));

        return () => {
        };
    }, []);

    const prioritySwitch = (prio) => {
        switch (prio) {
            case 1: return <td className="low"><i class="far fa-arrow-alt-circle-down"></i></td>
            case 2: return <td className="medium"><i class="far fa-arrow-alt-circle-down"></i></td>
            case 3: return <td className="high"><i class="far fa-arrow-alt-circle-up"></i></td>
            case 4: return <td className="critical"><i class="far fa-arrow-alt-circle-up"></i></td>
            default: return <td></td>
        }
    }

    const statusSwitch = (status) => {
        switch (status) {
            case 1: return <td><p className="grey">To Do</p></td>
            case 2: return <td><p className="blue">In progress</p></td>
            case 3: return <td><p className="green">Done</p></td>
            default: return <td></td>
        }
    }

    return(
        loading ? <div>Loading...</div>
        :
        <>
            <div className="tasks">
                <div className="tasks-header">
                    <h2>My Tasks</h2>
                </div>
                <div className="tasks-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Priority</th>
                                <th>Summary</th>
                                <th>Status</th>
                                <th>Assigne user</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task._id} >                                                        
                                    {prioritySwitch(task.priority)}
                                    <td><Link to={"/task/" + task._id}>{task.summary}</Link></td>
                                    {statusSwitch(task.status)}                                                            
                                    <td>{task.deadline.slice(0,10)}</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> 
        </>
    )
}

export default TasksPage;  