
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { logout as logoutService } from '../services/authService.jsx';

export const useLogout = () => {
    const { setUser, setError } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await logoutService();
            setUser(null);
            navigate('/login');
        } catch (error) {
            setError('Error logging out');
            console.error(error);
        }
    };

    return logout;
};
