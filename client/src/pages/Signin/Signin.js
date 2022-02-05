import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/user.action';
import './Signin.scss';
import Logo from '../../img/logo.png';

const SigninPage = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;

    const dispatch = useDispatch();
    useEffect(() => {
        if(userInfo){
           props.history.push("/");
        }

        return () => {
        }
    }, [userInfo]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(signin(login, password));
    }

    return (
        <div className="signin">
                <form onSubmit={submitHandler}>
                    <ul>
                        <li>
                            <h2>Sign In to MyTeam</h2>
                        </li>
                        <li>
                            <div><i class="fas fa-user"></i></div><input type="text" name="login" id="login" onChange={e => setLogin(e.target.value)} />
                        </li>
                        <li>
                            <div><i class="fas fa-key"></i></div><input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button button-wide">Log In <i class="fas fa-sign-in-alt"></i></button>
                        </li>
                    </ul>
                    <NavLink to="#" className="link-txt">Don't remember password?</NavLink>
                    <p>Not a member? Contact your IT department</p>
                </form>
                <a href="https://github.com/mhQ260" className="banner"><img src={Logo} alt="Logo" /></a>
        </div>
    )
}

export default SigninPage;  