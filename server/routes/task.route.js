import express from 'express';
import Task from '../models/task.model';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find({ 'project_id': req.query.projectId });
    res.send(tasks);
});

router.get('/user', async (req, res) => {
    const tasks = await Task.find({ 'assigne_user_id': req.query.userId });
    res.send(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    if(task) {
        res.send(task);
    } else {
        res.status(401).send({ msg: 'Task not foundend' });
    }
});

router.post('/', async (req, res) => {
    
    const task = new Task({
        summary: req.body.summary,
        project_id: req.body.projectId,
        assigne_user_id: req.body.assigneUserId,
        create_user_id: req.body.createUserId,
        updated_at: req.body.updatedAt,
        description: req.body.description,
        priority: req.body.priority,
        deadline: req.body.deadline,
        progress: req.body.progress
    });
    const newTask = await task.save();
    if(newTask){
        return res.status(201).send({ msg: 'New task has been created.', data: newTask });
    }
    return res.status(500).send({ msg: 'Error in creating task!' });
})

module.exports = router;