import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Task.scss';
import { detailsTask } from '../../actions/task.action';
import { detailsProject } from '../../actions/project.action';

const TaskPage = (props) => {

    const taskDetails = useSelector(state => state.taskDetails);
    const { loading, task, error } = taskDetails;

    const usersList = useSelector(state => state.usersList);
    const { loading: loadingUsers, users, error: errorUsers } = usersList;

    const projectDetails = useSelector(state => state.projectDetails);
    const { loading: loadingProject, project, error: errorProject } = projectDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsTask(props.match.params.id));
        
        try {
            dispatch(detailsTask(props.match.params.id));
        } catch (e) {
            console.error(e);
        }
        
        return () => {

        };
    }, []);

    const prioritySwitch = (prio) => {
        switch (prio) {
            case 1: return <p className="low">Low</p>
            case 2: return <p className="medium">Medium</p>
            case 3: return <p className="high">High</p>
            case 4: return <p className="critical">Critical</p>
            default: return <td></td>
        }
    }

    const statusSwitch = (status) => {
        switch (status) {
            case 1: return <p className="grey">To Do</p>
            case 2: return <p className="blue">In progress</p>
            case 3: return <p className="green">Done</p>
            default: return <td></td>
        }
    }

    return <div className="task">
        {loading ? <div>Loading...</div>
        :
        <>
            <div className="task-header">
                <h1>{task.summary}</h1>
                <h2><Link to={"/project/" + project._id}>{project.name}</Link></h2>
            </div>
            <div className="task-content">
                <div>
                    <div>Assigned To</div>
                    <div className="underline">{users.map(user => user._id === task.assigne_user_id ? <>{user.firstName} {user.lastName}</> : <></>)}</div>
                </div>
                <div>
                    <div>Deadline</div>
                    <div className="underline">{task.deadline.slice(0,10)}</div>
                </div>
                <div>
                    <div>Creation date</div>
                    <div className="underline">{task.created_at.slice(0,10)}</div>
                </div>
                <div>
                    <div>Creator</div>
                    <div className="underline">{users.map(user => user._id === task.create_user_id ? <>{user.firstName} {user.lastName}</> : <></>)}</div>
                </div>
                <div className="task-priority">
                    <div>Priority</div>
                    <div>{prioritySwitch(task.priority)}</div>
                </div>
                <div className="task-status">
                    <div>Status</div>
                    <div>{statusSwitch(task.status)}</div>
                </div>
                <div>
                    <div>Progress</div>
                    <div>{task.progress} %</div>
                </div>
                <div>
                    <div>Update date</div>
                    <div className="underline">{task.updated_at ? task.updated_at : <>-</>}</div>
                </div>
                <div>
                    <div>Description</div>
                    <div>{task.description}</div>
                </div>
            </div>
        </>
        }
        
    </div>

}

export default TaskPage;  