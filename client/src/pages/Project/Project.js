import React, {useEffect, useState, Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Project.scss';
import { TasksComponent } from './components/tasks.component';
import { detailsProject, saveUserToProject, listUsersInProject } from '../../actions/project.action';
import { Doughnut } from 'react-chartjs-2';

const ProjectPage = (props) => {

    const [isActiveOverview, setActiveOverview] = useState(false);
    const [isActiveTasks, setActiveTasks] = useState(false);
    const [isActiveUsers, setActiveUsers] = useState(false);
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');
    const [userModal, setUserModal] = useState(false);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const projectDetails = useSelector(state => state.projectDetails);
    const { loading, project, error } = projectDetails;

    const usersInProjectList = useSelector(state => state.usersInProjectList);
    const { loading: loadingUsersInProject, usersInProject, error: errorUsersInProject } = usersInProjectList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProject(props.match.params.id));
        dispatch(listUsersInProject(props.match.params.id));
        setUserModal(false);
        return () => {

        };
    }, [props.match.params.id, isActiveOverview, isActiveTasks, isActiveUsers]);

    const toggleClass = (n) => {

        if(n == "a") {
            setActiveOverview(true);
            setActiveTasks(false);
            setActiveUsers(false);
        } else if (n == "b") {
            setActiveOverview(false);
            setActiveTasks(true);
            setActiveUsers(false);
        } else if(n == "c") {
            setActiveOverview(false);
            setActiveTasks(false);
            setActiveUsers(true);
        }
    };

    const openUserModal = (user) => {
        setUserModal(true);
    }

    const submitSearchHandler = () => {

    }

    const submitUsersFormHandler = (e) => {
        e.preventDefault();
        dispatch(saveUserToProject({ projectId: props.match.params.id, userId, role }));
        setUserModal(false);
    }

    class OverwiewComponent extends React.Component {
        render () {
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
    }

    class UsersComponent extends React.Component {
        render () {
          return(
            <>
                {userModal &&
                    <div className="form-modal">
                        <form onSubmit={submitUsersFormHandler}>
                            <ul className="form-container">
                                <li>
                                    <h2>Add user to Project</h2>
                                </li>
                                <li>
                                    <label htmlFor="id">
                                        User Id
                                    </label>
                                    <input type="text" name="userId" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
                                </li>
                                <li>
                                    <label htmlFor="role">
                                        User's role
                                    </label>
                                    <input type="text" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                                </li>
                            </ul>
                            <ul className="form-buttons-container">
                                <li>
                                    <button type="submit" className="button">Create</button>
                                    <button type="button" className="button empty" onClick={() => setUserModal(false)}>Cancel</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                }  
                <div className="project-users">
                    <div className="users-header">
                        <h2>Users</h2>
                        {userInfo.isAdmin ? 
                            <button className="button" onClick={() => openUserModal({})}><i class="fas fa-user-plus"></i> Add User</button>
                            :
                            <></>
                        }
                    </div>
                    <div className="users-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Login</th>
                                    <th>Roles</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading && usersInProject.length > 0 ?
                                    usersInProject.map(user => (
                                        <tr key={user._id}>
                                            <td><a className="bold">{user.lastName}</a> {user.firstName}</td>
                                            <td>{user.login}</td>
                                            <td>-</td>
                                            <td><button><i class="fas fa-minus-circle"></i></button></td>
                                        </tr>
                                    ))
                                :
                                    <></>
                                }
                            </tbody>
                        </table>
                    </div> 
                </div>
            </>
          )
        }
    }


    return <div className="project">
        {loading ? <div>Loading...</div>
        :
        <>
            <div className="project-header"><h1>{project.name}</h1></div>
            <div className="project-content">
                {isActiveOverview ? <OverwiewComponent /> : isActiveTasks ? <TasksComponent projectId={project._id} /> : isActiveUsers ? <UsersComponent /> : null}
            </div>
            <div className="nav">
                <div className={isActiveOverview ? 'active-border' : null} onClick={() => toggleClass("a")}>Overwiew</div>
                <div className={isActiveTasks ? 'active-border' : null} onClick={() => toggleClass("b")}>Tasks</div>
                <div className={isActiveUsers ? 'active-border' : null} onClick={() => toggleClass("c")}>Users</div>
            </div>
        </>
        }
        
    </div>
}

export default ProjectPage;  