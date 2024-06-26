const db = require('../db');
const bcrypt = require('bcrypt');

class UserModel {

    static async getUserByUsername(username) {
        try {
            return await db('utilisateur').where('IDENTIFIANTUTILISATEUR', username).first();
        } catch (error) {
            console.error(error);
        }
    }

    static async getAllUsers() {
        try {
            return await db('utilisateur').select('*');
        } catch (error) {
            console.error(error);
        }
    }

    static async addUser(user) {
        try {
            const hash = await bcrypt.hash(user.MOTDEPASSEUTILISATEUR, 10);
            user.MOTDEPASSEUTILISATEUR = hash;
            return await db('utilisateur').insert(user);
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = UserModel;