import React, {useEffect, useState, Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProject } from '../../actions/project.action';
import './Project.scss';
import { TasksComponent } from './components/tasks.component';
import { MembersComponent } from './components/members.component';
import { OverviewComponent } from './components/overview.component';

const ProjectPage = (props) => {

    const [isActiveOverview, setActiveOverview] = useState(false);
    const [isActiveTasks, setActiveTasks] = useState(false);
    const [isActiveUsers, setActiveUsers] = useState(false);

    const projectDetails = useSelector(state => state.projectDetails);
    const { loading, project, error } = projectDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProject(props.match.params.id));
        return () => {

        };
    }, [props.match.params.id, isActiveOverview, isActiveTasks, isActiveUsers]);

    const toggleClass = (n) => {

        if(n == "a") {
            setActiveOverview(true);
            setActiveTasks(false);
            setActiveUsers(false);
        } else if (n == "b") {
            setActiveOverview(false);
            setActiveTasks(true);
            setActiveUsers(false);
        } else if(n == "c") {
            setActiveOverview(false);
            setActiveTasks(false);
            setActiveUsers(true);
        }
    };

    return <div className="project">
        {loading ? <div>Loading...</div>
        :
        <>
            <div className="project-header"><h1>{project.name}</h1></div>
            <div className="project-content">
                {isActiveOverview ? <OverviewComponent /> : isActiveTasks ? <TasksComponent projectId={project._id} /> : isActiveUsers ? <MembersComponent projectId={project._id} /> : null}
            </div>
            <div className="nav">
                <div className={isActiveOverview ? 'active-border' : null} onClick={() => toggleClass("a")}>Overwiew</div>
                <div className={isActiveTasks ? 'active-border' : null} onClick={() => toggleClass("b")}>Tasks</div>
                <div className={isActiveUsers ? 'active-border' : null} onClick={() => toggleClass("c")}>Members</div>
            </div>
        </>
        }
        
    </div>
}

export default ProjectPage;  