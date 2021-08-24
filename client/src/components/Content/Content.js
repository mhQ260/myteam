import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Content.scss';
import { AccountPage, DashboardPage, ManagePage, ProjectsPage, ReportsPage, TasksPage, SigninPage } from '../../pages';

const Content = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <main>
           <div className="main-wrapper">
                {!userInfo ?
                    <>
                        <Switch>
                            <Route path="/" exact component={DashboardPage} />
                            <Route path="/account" component={AccountPage} />
                            <Route path="/manage" component={ManagePage} />
                            <Route path="/projects" component={ProjectsPage} />
                            <Route path="/reports" component={ReportsPage} />
                            <Route path="/tasks" exact component={TasksPage} />
                        </Switch>
                    </>
                    :
                    <>
                        <Switch>
                            <Route path="/" component={SigninPage} />
                        </Switch>
                    </>
                }
            </div> 
        </main>
    )
}

export default Content;