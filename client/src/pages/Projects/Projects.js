import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Projects.scss';
import { listUserProjects, listProjects } from '../../actions/project.action';

const ProjectsPage = () => {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const userProjectsList = useSelector(state => state.userProjectsList);
    const { loading, projects, error } = userProjectsList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUserProjects(userInfo._id));
        // dispatch(listProjects());
        return () => {
        };
    }, []);

    return (
        loading ? <div>Loading...</div>
        :
        <>
            <div className="projects">
                <div className="projects-header">
                    <h1>My Projects</h1>
                </div>
                <div className="projects-container">
                    {projects.map(project => (
                         <Link to={"/project/" + project._id}>
                            <div className="projects-el">
                                <div>{project.name}</div>
                                <div><p>End date: </p><p>{project.endDate.slice(0,10)}</p></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
        
    )
}

export default ProjectsPage;  