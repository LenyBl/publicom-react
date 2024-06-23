const express = require('express');

const messageModel = require('../models/MessageModel');

const router = express.Router();

router.get('/messages', async (req, res) => {
        try {
            const messages = await messageModel.getAllMessages();
            res.json(messages);
        } catch (error) {
            console.error(error);
        }
    }
);

router.post('/add-message', async (req, res) => {
        try {
            await messageModel.addMessage(req.body);
            res.status(201)
        } catch (error) {
            console.error(error);
        }
    }
);

module.exports = router;