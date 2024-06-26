// Exemple de userService.jsx

import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

export async function getAllUsers() {
    try {
        const users = await axios.get(API_URL + 'users');
        return users.data;
    } catch (error) {
        throw new Error('Error fetching users');
    }
}

export async function addUser(user) {
    try {
        await axios.post(API_URL + 'add-user', user);
    } catch (error) {
        throw new Error('Error adding user');
    }
}

