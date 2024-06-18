const db = require('../db');

class UserModel {

    static async getAllUsers() {
        try {
            return await db('utilisateur').select('*');
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = UserModel;