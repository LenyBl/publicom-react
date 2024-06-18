const express = require('express');

const userModel = require('../models/UserModel');

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;