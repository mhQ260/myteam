import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/project.model';
import User from '../models/user.model';
import ProjectMember from '../models/projectMember.model';
import { isAuth, isAdmin } from '../util';

var ObjectId = require('mongodb').ObjectID;

const router = express.Router();

router.get('/:id', async (req, res) => {
    let arr = [];
    const members = await ProjectMember.find({ project_id: req.params.id});  

    if(members) {
        for(let i = 0; i < members.length; i++) {
            arr[i] = members[i].user_id; 
        }
    } else {
        res.status(401).send({ message: 'No members!' });
    }
    const users = await User.find({ '_id': { $in: arr }})

    res.send(users)
})

router.get('/user/:userId', async (req, res) => {
    let arr = [];
    const userProjects = await ProjectMember.find({ user_id: req.params.userId});  

    if(userProjects) {
        for(let i = 0; i < userProjects.length; i++) {
            arr[i] = userProjects[i].project_id; 
        }
    } else {
        res.status(401).send({ message: 'No projects for user!' });
    }
    const projects = await Project.find({ '_id': { $in: arr }})

    res.send(projects)
})

router.post('/addMember', async (req, res) => {
    
    const projectMember = new ProjectMember({
        project_id: mongoose.Types.ObjectId(req.body.projectId),
        user_id: mongoose.Types.ObjectId(req.body.userId),
        role: req.body.role,
    });

    const newProjectMember = await projectMember.save();
    if(newProjectMember){
        return res.status(201).send({ msg: 'New project member has been added.', data: newProjectMember });
    } else {
        return res.status(500).send({ msg: "Error in creating project's member!" });
    }
})

module.exports = router;