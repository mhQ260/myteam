import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Signin.scss';

const SigninPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {

        return () => {
            //
        }
    }, [])

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <div className="signin">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Sign In</h2>
                        </li>
                        <li>
                            <label htmlFor="login">Login</label>
                            <input type="text" name="login" id="login" onChange={e => setLogin(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button button-wide">Log In</button>
                            <NavLink to="#" className="link-txt">Don't remember password?</NavLink>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </form>
        </div>
    )
}

export default SigninPage;  