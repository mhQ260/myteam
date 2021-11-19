import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './UsersManage.scss';
import { listUsers } from '../../actions/user.action';

const UsersManagePage = () => {

    const [modal, setModal] = useState(false);
    const [id, setId] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [searchName, setSearchName] = useState('');

    const usersList = useSelector(state => state.usersList);
    const { loading, users, error } = usersList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers());
        return () => {
            
        };
    }, []);

    const submitSearchHandler = (e) => {
        e.preventDefault();
    }

    return <>
        {loading ? <dvi>Loading...</dvi>
        :  
        <div className="manage">
            <div className="manage-header"><h1>Users</h1></div>
            <div className="manage-tools">
                <div className="search-container">
                    <form onSubmit={submitSearchHandler}>
                        <input type="text" name="searchName" id="searchName" value={searchName} placeholder="Name" onChange={(e) => setSearchName(e.target.value)} />
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="buttons-container"><i class="fas fa-user-plus"></i></div>
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
                                <td><i class="fas fa-user-edit"></i></td>
                                <td><i class="fas fa-user-minus"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
        }
    </>
}

export default UsersManagePage;  