import React, {useState, useEffect} from 'react';
import {getAllUsers} from '../services/userService';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getAllUsers();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error);
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!Array.isArray(users) || users.length === 0) {
        return <p>No users found</p>;
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.IDUTILISATEUR}>
                        {user.NOMUTILISATEUR}, {user.PRENOMUTILISATEUR} ({user.IDENTIFIANTUTILISATEUR})
                    </li>
                ))}
            </ul>
        </div>
    );
}
