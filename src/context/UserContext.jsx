import React, { createContext, useState, useEffect } from 'react';
import { getProfile } from '../services/authService.jsx';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log('Fetching user profile...');
                const profile = await getProfile();
                console.log('User profile fetched:', profile);
                setUser(profile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading, error }}>
            {!isLoading && children}
        </UserContext.Provider>
    );
}
