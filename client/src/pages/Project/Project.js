import React, {useEffect, useState, Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Project.scss';
import { detailsProject } from '../../actions/project.action';
import { Doughnut } from 'react-chartjs-2';

const ProjectPage = (props) => {

    const [isActiveOverview, setActiveOverview] = useState(false);
    const [isActiveTasks, setActiveTasks] = useState(false);
    const [isActiveUsers, setActiveUsers] = useState(false);

    const projectDetails = useSelector(state => state.projectDetails);
    const { loading, project, error } = projectDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProject(props.match.params.id));
    }, [props.match.params.id]);

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

    class OverwiewComponent extends React.Component {
        render () {
          return (
            <div className="project-overwiew">
                <div className="overview-summary">
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
                <div className="overview-content">
                    <h2>Recent activity</h2>
                    <div className="overview-activity">
                        <div>L</div>
                        <div>User X added task</div>
                        <div>4m</div>
                    </div>
                    <div className="overview-activity">
                        <div>L</div>
                        <div>User X added task</div>
                        <div>4m</div>
                    </div>
                    <div className="overview-activity">
                        <div>L</div>
                        <div>User X added task</div>
                        <div>4m</div>
                    </div>
                </div>
            </div>
          )
        }
    }

    class TasksComponent extends React.Component {
        render () {
          return(
            <div>
              Tasks area
            </div>
          )
        }
    }

    class UsersComponent extends React.Component {
        render () {
          return(
            <div>
              Users area
            </div>
          )
        }
    }


    return <div className="project">
        {loading ? <div>Loading...</div>
        :
        <>
            <div className="project-header"><h1>{project.name}</h1></div>
            <div className="project-content">
                {isActiveOverview ? <OverwiewComponent /> : isActiveTasks ? <TasksComponent /> : isActiveUsers ? <UsersComponent /> : null}
            </div>
            <div className="nav">
                <div className={isActiveOverview ? 'active-border' : null} onClick={() => toggleClass("a")}>Overwiew</div>
                <div className={isActiveTasks ? 'active-border' : null} onClick={() => toggleClass("b")}>Tasks</div>
                <div className={isActiveUsers ? 'active-border' : null} onClick={() => toggleClass("c")}>Users</div>
            </div>
        </>
        }
        
    </div>
}

export default ProjectPage;  