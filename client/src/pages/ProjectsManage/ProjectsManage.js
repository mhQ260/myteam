import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProjectsManage.scss';
import { listProjects, saveProject } from '../../actions/project.action';
import { listUsers } from '../../actions/user.action';

const ProjectsManagePage = () => {

    const [modal, setModal] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [managerId, setManagerId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [isArchive, setIsArchive] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchChange, setSearchChange] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);

    const projectsList = useSelector(state => state.projectsList);
    const { loading, projects, error } = projectsList;

    const projectSave = useSelector(state => state.projectSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = projectSave;

    const usersList = useSelector(state => state.usersList);
    const { loading: loadingUsers, users, error: errorUsers } = usersList;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave) {
            setModal(false);
        }
        dispatch(listProjects());
        dispatch(listUsers());
        return () => {
            
        };
    }, [successSave, searchChange]);

    const openModal = (project) => {
        setModal(true);
        setId(project._id);
        setName(project.login);
        setManagerId(project.email);
        setStartDate(project.password);
        setEndDate(project.firstName);
        setDescription(project.lastName);
        setIsArchive(project.isAdmin);
    }

    const mySearchFunction = (val) => {
        let tempData = projects.slice();;
        tempData = tempData.filter(
            data => data.name.toUpperCase().indexOf(val.toUpperCase()) > -1
        );
        setFilteredResults(tempData);
    }

    const submitSearchHandler = (e) => {
        e.preventDefault();
        setSearchChange(!searchChange);
        mySearchFunction(searchName);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(saveProject({ _id: id, name, startDate, endDate, description, isArchive }));
    }

    const deleteHandler = (project) => {

    }

    return <div className="projects-manage">
        {loading ? <div>Loading...</div>
        : <> 
        {modal &&
            <div className="form-modal">
                <form onSubmit={submitFormHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>{id ? 'Update Project' : 'Create Project'}</h2>
                        </li>
                        <li>
                            <label htmlFor="name">
                                Project name
                            </label>
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="description">
                                Project description
                            </label>
                            <input type="description" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="managerId">
                                Project Manager
                            </label>
                                <select name="managerId" id="managerId" value={managerId} onChange={(e) => setManagerId(e.target.value)}>
                                     {users.map(user => (
                                         <option value={user._id}>{user.firstName} {user.lastName}</option>
                                     )) }
                                </select>
                        </li>
                        <li>
                            <label htmlFor="startDate">
                                Start date of the project
                            </label>
                            <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="endDate">
                                End date of the project
                            </label>
                            <input type="date" name="endDate" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </li>
                    </ul>
                    <ul className="form-buttons-container">
                        <li>
                            <button type="submit" className="button">{id ? 'Update' : 'Create'}</button>
                            <button type="button" className="button empty" onClick={() => setModal(false)}>Cancel</button>
                        </li>
                    </ul>
                </form>
            </div>
        }   
        <div className="manage">
            <div className="manage-header"><h1>Projects</h1></div>
            <div className="manage-tools">
                <div className="search-container">
                    <form onSubmit={submitSearchHandler}>
                        <input type="text" name="searchName" id="searchName" value={searchName} placeholder="Name" onChange={(e) => setSearchName(e.target.value)} />
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="buttons-container"><button onClick={() => openModal({})}><i class="fas fa-project-plus"></i> Create Project</button></div>
            </div>
            <div className="manage-list">
                <table>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>PM</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th></th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredResults.length > 0 ? 
                        filteredResults.map(project => (
                            <tr key={project._id}>
                                <td><Link to={'/project/' + project._id}>{project.name}</Link></td>
                                <td>None</td>
                                <td>{project.startDate.slice(0,10)}</td>
                                <td>{project.endDate.slice(0,10)}</td>
                                <td></td>
                                <td><button className="form-button" onClick={() => openModal(project)}><i class="fas fa-edit"></i></button></td>
                                <td><button className="form-button" onClick={() => deleteHandler(project)}><i class="fas fa-minus-circle"></i></button></td>
                            </tr>
                        ))
                        :
                        <>
                            {projects ? 
                            projects.map(project => (
                                <tr key={project._id}>
                                    <td><Link to={'/project/' + project._id}>{project.name}</Link></td>
                                    <td>None</td>
                                    <td>{project.startDate.slice(0,10)}</td>
                                    <td>{project.endDate.slice(0,10)}</td>
                                    <td></td>
                                    <td><button className="form-button" onClick={() => openModal(project)}><i class="fas fa-edit"></i></button></td>
                                    <td><button className="form-button" onClick={() => deleteHandler(project)}><i class="fas fa-minus-circle"></i></button></td>
                                </tr>
                            ))
                            :
                            <></>
                            
                            }
                            </>
                        }
                    </tbody>
                </table>
            </div> 
        </div>
        </>}
    </div>
}

export default ProjectsManagePage;  