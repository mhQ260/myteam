import express from 'express';
import User from '../models/user.model';
import { getToken, isAuth, isAdmin } from '../util';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            login: 'Matty',
            email: 'matty@test.com',
            password: '1234',
            firstName: 'Matty',
            lastName: 'Test',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
        
    } catch (error) {
        res.send({ message: error.message });
    }
})

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.send(users);
    console.log('users')
})

router.post('/signin', async (req, res) => {
    try {
        const signinUser = await User.findOne({ login: req.body.login });
        console.log(req.body.login);
        if(signinUser) {
            const compare = await bcrypt.compare(req.body.password, signinUser.password);
            if(compare) {
                res.send({
                    _id: signinUser.id,
                    name: signinUser.name,
                    email: signinUser.email,
                    isAdmin: signinUser.isAdmin,
                    token: getToken(signinUser)
                })
            } else {
                res.status(401).send({ message: 'Invalid email or password!' });
            }
        } else {
            res.status(401).send({ message: 'Invalid email or password!' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Internal Server error Occured' });
    }
        
});


module.exports = router;