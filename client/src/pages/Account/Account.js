import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, saveUser } from '../../actions/user.action';
import './Account.scss';

const AccountPage = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const userGet = useSelector(state => state.userGet);
    const { loading, user, error } = userGet;

    const userSave = useSelector(state => state.userSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = userSave;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(userInfo._id));

        return () => {
            
        };
    }, [successSave, errorSave]);

    const submitFormHandler = (e) => {
        e.preventDefault();
            dispatch(saveUser({ _id: userInfo._id , login: userInfo.login, email: userInfo.email, password, firstName, lastName, isAdmin: userInfo.isAdmin, isArchive: false, oldPassword, adminPanel: false }))
            setFirstName('');
            setLastName('');
            setPassword('');
            setOldPassword('');     
    }

    return (
        loading ? <div>Loading...</div>
        :
        <div className="account">
            <div className="account-header"><h1>Account Settings</h1></div>   
            <div className="account-container">
                <div className="avatar">
                    <div className="logo"><i class="fas fa-user-circle"></i></div>
                    <div className="buttons">
                        <button className="btn">Upload New</button>
                        <button className="btn empty">Delete Avatar</button>
                    </div>
                </div>
                <div className="user-data">
                    <form onSubmit={submitFormHandler}>
                        <ul className="form-container">
                            <li>
                                <label htmlFor="firstName">
                                    First Name
                                </label>
                                <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="lastName">
                                    Last Name
                                </label>
                                <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="password">
                                    Old-Password*
                                </label>
                                <input type="password" name="oldPassword" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                <p>*Only for change password</p>
                            </li>                 
                            <li>
                                <button type="submit" className="btn">Update Profile</button>
                            </li>                              
                        </ul>                        
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default AccountPage;  