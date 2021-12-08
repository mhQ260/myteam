import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Project.scss';
import { detailsProject } from '../../actions/project.action';
import { Doughnut } from 'react-chartjs-2';

const ProjectPage = (props) => {

    const projectDetails = useSelector(state => state.projectDetails);
    const { loading, project, error } = projectDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProject(props.match.params.id));
    }, [props.match.params.id]);


    return <div className="project">
        {loading ? <div>Loading...</div>
        :
        <>
            <div className="project-header"><h1>Project {project.name}</h1></div>
            <div className="project-summary">
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
            <div className="project-content">
                Recent activity
            </div>
            <div className="nav">
                <div>Overview</div>
                <div>Tasks</div>
                <div>Users</div>
            </div>
        </>
        }
        
    </div>
}

export default ProjectPage;  