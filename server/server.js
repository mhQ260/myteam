import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routes/user.route';
import projectRoute from './routes/project.route';
import projectMemberRoute from './routes/projectMember.route';
import taskRoute from './routes/task.route';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/projects', projectRoute);
app.use('/api/projectMember', projectMemberRoute);
app.use('/api/tasks', taskRoute);

app.listen(5000, () => { console.log("Server is running at at http://localhost:5000") }) 