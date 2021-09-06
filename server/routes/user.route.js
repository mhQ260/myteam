import express from 'express';
import User from '../models/user.model';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.post('/register', async (req, res) => {
    
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const newUser = await user.save();

    if(newUser){
        res.send({
            _id: newUser.id,
            login: newUser.name,
            email: newUser.email,
            password: newUser.password,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }
    else {
        res.status(401).send({ message: 'Invalid user data!' });
    }
})