// authService.jsx (ou api.js)
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Permet d'envoyer les cookies avec la requête
});

export const login = async (user) => {
    try {
        const response = await api.post('/login', user);
        return response.data;
    } catch (error) {
        throw new Error('Error logging in');
    }
};

export const logout = async () => {
    try {
        const response = await api.post('/logout');
        return response.data;
    } catch (error) {
        throw new Error('Error logging out');
    }
};

export const getProfile = async () => {
    try {
        const response = await api.get('/profile');
        const profile =
            ({
                id : response.data.IDUTILISATEUR,
                username: response.data.IDENTIFIANTUTILISATEUR,
                firstName: response.data.PRENOMUTILISATEUR,
                lastName: response.data.NOMUTILISATEUR,
                password: response.data.MOTDEPASSEUTILISATEUR
            });
        return profile;
    } catch (error) {
        throw new Error('Error getting profile');
    }
};
