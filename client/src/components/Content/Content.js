import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Content.scss';
import { AccountPage, DashboardPage, ManagePage, ProjectsPage, ReportsPage, TasksPage, SigninPage, UsersManagePage, ProjectsManagePage, ProjectPage, TaskPage } from '../../pages';

const Content = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <main>
           <div className="header">
               <i class="fas fa-bars"></i>
               <div><i class="fas fa-user-circle"></i> Matty Test</div>
               
            </div>
           <div className="main-wrapper">
                {userInfo ?
                    <>
                        <Switch>
                            <Route path="/" exact component={DashboardPage} />
                            <Route path="/account" component={AccountPage} />
                            <Route path="/manage" exact component={ManagePage} />
                            <Route path="/projects" exact component={ProjectsPage} />
                            <Route path="/reports" exact component={ReportsPage} />
                            <Route path="/tasks" exact component={TasksPage} />
                            <Route path="/task/:id" exact component={TaskPage} />
                            <Route path="/manage/users" exact component={UsersManagePage} />
                            <Route path="/manage/projects" exact component={ProjectsManagePage} />
                            <Route path="/project/:id" component={ProjectPage} />
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