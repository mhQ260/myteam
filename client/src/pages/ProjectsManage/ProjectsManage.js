import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProjectsManage.scss';
import { listProjects, saveProject } from '../../actions/project.action';

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

    const projectsList = useSelector(state => state.projectsList);
    const { loading, projects, error } = projectsList;

    const projectSave = useSelector(state => state.projectSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = projectSave;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave) {
            setModal(false);
        }
        dispatch(listProjects());
        return () => {
            
        };
    }, [successSave]);

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

    const submitSearchHandler = (e) => {
        e.preventDefault();
    }

    const submitFormHandler = (e) => {
        console.log("click create")
        e.preventDefault();
        dispatch(saveProject({ _id: id, name, startDate, endDate, description, isArchive }));
    }

    const deleteHandler = (project) => {

    }

    return <>
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
                            <input type="text" name="managerId" id="managerId" value={managerId} onChange={(e) => setManagerId(e.target.value)} />
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
                        {projects ? 
                        projects.map(project => (
                            <tr key={project._id}>
                                <td>{project.name}</td>
                                <td>None</td>
                                <td>{project.startDate.slice(0,10)}</td>
                                <td>{project.endDate.slice(0,10)}</td>
                                <td></td>
                                <td><button className="form-button" onClick={() => openModal(project)}><i class="fas fa-project-edit"></i></button></td>
                                <td><button className="form-button" onClick={() => deleteHandler(project)}><i class="fas fa-project-minus"></i></button></td>
                            </tr>
                        ))
                        :
                        <></>
                    }
                    </tbody>
                </table>
            </div> 
        </div>
        </>}
    </>
}

export default ProjectsManagePage;  