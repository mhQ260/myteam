import React, {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listTasks, saveTask } from '../../../actions/task.action';
import { listUsers } from '../../../actions/user.action';

export const TasksComponent = props => {

    const [summary, setSummary] = useState('');
    const [assigneUserId, setAssigneUserId] = useState('');
    const [createUserId, setCreateUserId] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');
    const [progress, setProgress] = useState('');
    const [taskModal, setTaskModal] = useState(false);

    const tasksList = useSelector(state => state.tasksList);
    const { loading, tasks, error } = tasksList;

    const taskSave = useSelector(state => state.taskSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = taskSave

    const usersList = useSelector(state => state.usersList);
    const { loading: loadingUsers, users, error: errorUsers } = usersList;

    const dispatch = useDispatch();

    useEffect(() => {
        setTaskModal(false);
        dispatch(listTasks(props.projectId));
        dispatch(listUsers());
        return () => {
        };
    }, [successSave]);

    const openTaskModal = (task) => {
        setTaskModal(true);
    }

    const submitTasksFormHandler = (e) => {
        e.preventDefault();
        dispatch(saveTask({ summary, projectId: props.projectId, assigneUserId, createUserId: "619bf5a01f8f3f4880786085", description, priority, status, deadline }));
        setTaskModal(false);
    }

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
              loading ? 
                <></>
                :
                <>
                {taskModal &&
                <div className="form-modal">
                    <form onSubmit={submitTasksFormHandler}>
                        <ul className="form-container">
                            <li>
                                <h2>Create Task</h2>
                            </li>
                            <li>
                                <label htmlFor="summary">
                                    Summary
                                </label>
                                <input type="text" name="summary" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
                            </li>
                            <li>
                                 <label htmlFor="assigneUser">
                                     Assigne User
                                 </label>
                                 <input type="text" name="assigneUser" id="assigneUser" value={assigneUserId} onChange={(e) => setAssigneUserId(e.target.value)} />
                            </li>
                            <li>
                                 <label htmlFor="description">
                                     Task description
                                 </label>
                                 <textarea name="description" id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </li>
                            <li>
                                <label htmlFor="priority">
                                    Priority
                                </label>
                                <select name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                    <option value="4">Critical</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="deadline">
                                    Deadline
                                </label>
                                <input type="date" name="deadline" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                            </li>
                        </ul>
                        <ul className="form-buttons-container">
                            <li>
                                <button type="submit" className="button">Create</button>
                                <button type="button" className="button empty" onClick={() => setTaskModal(false)}>Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div>
                }
                <div className="project-tasks">
                                 <div className="tasks-header">
                                     <h2>Tasks</h2>
                                     {true ? 
                                        <button className="button" onClick={() => openTaskModal({})}><i class="fas fa-user-plus"></i> Add Task</button>
                                        :
                                        <></>
                                    }
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
                                                            <td><Link to="">{task.summary}</Link></td>
                                                            {statusSwitch(task.status)}
                                                            <td>{users.map(user => user._id === task.assigne_user_id ? <>{user.firstName} {user.lastName}</> : <></>)}</td>
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