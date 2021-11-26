import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UsersManage.scss';
import { listUsers, saveUser } from '../../actions/user.action';

const UsersManagePage = () => {

    const [modal, setModal] = useState(false);
    const [id, setId] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [searchName, setSearchName] = useState('');

    const usersList = useSelector(state => state.usersList);
    const { loading, users, error } = usersList;

    const userSave = useSelector(state => state.userSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = userSave;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave) {
            setModal(false);
        }
        dispatch(listUsers());
        return () => {
            
        };
    }, [successSave]);

    const openModal = (user) => {
        setModal(true);
        setId(user._id);
        setLogin(user.login);
        setEmail(user.email);
        setPassword(user.password);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setIsAdmin(user.isAdmin);
    }

    const submitSearchHandler = (e) => {
        e.preventDefault();
    }

    const submitFormHandler = (e) => {
        console.log("click create")
        e.preventDefault();
        dispatch(saveUser({ _id: id, login, email, password, firstName, lastName, isAdmin }))
    }

    const deleteHandler = (user) => {

    }

    return <>
        {loading ? <div>Loading...</div>
        : <> 
        {modal &&
            <div className="form-modal">
                <form onSubmit={submitFormHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>{id ? 'Update User' : 'Create User'}</h2>
                        </li>
                        <li>
                            <label htmlFor="login">
                                Login
                            </label>
                            <input type="text" name="login" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="firstName">
                                First Name
                            </label>
                            <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="lastName">
                                First Name
                            </label>
                            <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </li>
                    </ul>
                    <ul className="form-buttons-container">
                        <li>
                            <button type="submit" className="button">{id ? 'Update' : 'Create'}</button>
                            <button type="button" className="button empty" onClick={() => setModal(false)}>Cancel</button>
                        </li>
                    </ul>
                </form>
            </div>
        }   
        <div className="manage">
            <div className="manage-header"><h1>Users</h1></div>
            <div className="manage-tools">
                <div className="search-container">
                    <form onSubmit={submitSearchHandler}>
                        <input type="text" name="searchName" id="searchName" value={searchName} placeholder="Name" onChange={(e) => setSearchName(e.target.value)} />
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="buttons-container"><button onClick={() => openModal({})}><i class="fas fa-user-plus"></i> Create User</button></div>
            </div>
            <div className="manage-list">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Login</th>
                            <th>Roles</th>
                            <th>Created at</th>
                            <th></th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td><i class="fas fa-user"></i></td>
                                <td><a className="bold">{user.lastName}</a> {user.firstName}</td>
                                <td>{user.login}</td>
                                <td>{user.isAdmin ? <>Administrator</> : <>-</>}</td>
                                <td>{user.created_at.slice(0,10)}</td>
                                <td></td>
                                <td><button className="form-button" onClick={() => openModal(user)}><i class="fas fa-user-edit"></i></button></td>
                                <td><button className="form-button" onClick={() => deleteHandler(user)}><i class="fas fa-user-minus"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
        </>}
    </>
}

export default UsersManagePage;  