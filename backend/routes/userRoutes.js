const express = require('express');

const userModel = require('../models/UserModel');

const router = express.Router();

const bcrypt = require('bcrypt');

router.get('/users', async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
    }
});

router.post('/add-user', async (req, res) => {
        try {
            await userModel.addUser(req.body);
            res.status(201)
        } catch (error) {
            console.error(error);
        }
    }
);

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const user = await userModel.getUserByUsername(req.body.IDENTIFIANTUTILISATEUR);
        if (user) {
            if (await bcrypt.compare(req.body.MOTDEPASSEUTILISATEUR, user.MOTDEPASSEUTILISATEUR)) {
                req.session.user = user;
                res.status(200).json(user);
            } else {
                res.status(401).json({message: 'Invalid credentials'});
            }
        } else {
            res.status(401).json({message: 'Invalid credentials'});
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({message: 'Logged out'});
});

router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
});

module.exports = router;