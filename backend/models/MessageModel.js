const db = require('../db');

class MessageModel {

        static async getAllMessages() {
            try {
                return await db('message').select('*');
            } catch (error) {
                console.error(error);
            }
        }

        static async addMessage(message) {
            try {
                return await db('message').insert(message);
            } catch (error) {
                console.error(error);
            }
        }

}

module.exports = MessageModel;