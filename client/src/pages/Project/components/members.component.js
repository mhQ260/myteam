import React, {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProject, saveUserToProject, listUsersInProject } from '../../../actions/project.action';
import { listUsers } from '../../../actions/user.action';

export const MembersComponent = props => {

    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');
    const [userModal, setUserModal] = useState(false);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const usersInProjectList = useSelector(state => state.usersInProjectList);
    const { loading, usersInProject, error} = usersInProjectList;

    const userInProjectSave = useSelector(state => state.userInProjectSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = userInProjectSave;

    const usersList = useSelector(state => state.usersList);
    const { loading: loadingUsers, users, error: errorUsers } = usersList;

    const dispatch = useDispatch();

    useEffect(() => {
        setUserModal(false);
        dispatch(listUsersInProject(props.projectId))
        dispatch(listUsers());
        return () => {
        };
    }, [successSave]);

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

    return (
        loading ?
        <></>
        :
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
                                <select name="userId" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)}>
                                {users.map(user => (
                                    <option value={user._id}>{user.firstName} {user.lastName}</option>
                                )) }
                           </select>
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
                            {usersInProject.map(user => (
                                    <tr key={user._id}>
                                        <td><a className="bold">{user.lastName}</a> {user.firstName}</td>
                                        <td>{user.login}</td>
                                        <td>-</td>
                                        <td><button><i class="fas fa-minus-circle"></i></button></td>
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