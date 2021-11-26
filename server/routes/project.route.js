import express from 'express';
import Project from '../models/project.model';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await Project.find({});
    res.send(projects);
});

router.post('/', isAuth, isAdmin, async (req, res) => {
    const project = new Project({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        isArchive: req.body.isArchive,
    });
    const newProject = await project.save();
    if(newProject){
        return res.status(201).send({ msg: 'New project has been created.', data: newProject });
    }
    return res.status(500).send({ msg: 'Error in creating project!' });
})

router.put('/:id', isAuth, isAdmin, async (req, res) => {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if(project) {
        project.name = req.body.name;
        project.startDate = req.body.startDate;
        project.endDate = req.body.endDate;
        project.description = req.body.description;
        project.isArchive = req.body.isArchive;
        const updatedProject = await project.save();
        if (updatedProject) {
            return res.status(200).send({ msg: 'Project has been updated.', data: updatedProject });
        }
    }
    return res.status(500).send({ msg: 'Error in updating project!' });
})

module.exports = router;