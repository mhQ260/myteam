import express from 'express';
import User from '../models/user.model';
import { getToken, isAuth, isAdmin } from '../util';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', isAuth, isAdmin, async (req, res) => {

    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isAdmin: req.body.isAdmin
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

router.put('/:id', isAuth, isAdmin, async (req,res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(user) {
        user.login = req.body.login;
        user.email = req.body.email;
        user.password = req.body.password;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.isAdmin = req.body.isAdmin;
        user.isArchive = req.body.isArchive;
        const updatedUser = await user.save();
        if(updatedUser) { 
            return res.status(200).send({ msg: 'User has been updated', data: updatedUser });
        }
    }
    return res.status(500).send({ msg: 'Error in updating user!' });
})

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            login: 'Matty',
            email: 'matty@test.com',
            password: '1234',
            firstName: 'Matty',
            lastName: 'Test',
            isAdmin: true,
            isArchive: false,
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
})

router.post('/signin', async (req, res) => {
    try {
        const signinUser = await User.findOne({ login: req.body.login });
        if(signinUser) {
            const compare = await bcrypt.compare(req.body.password, signinUser.password);
            if(compare) {
                res.send({
                    _id: signinUser.id,
                    login: signinUser.login,
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