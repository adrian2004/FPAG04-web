import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');

            try {
                await fetch(process.env.REACT_APP_API_URL + '/api/auth/logout', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                localStorage.clear();

            } catch (error) {
                console.log(error);
            }
            finally {
                localStorage.clear();
                navigate('/login');
            }
        };
        checkAuth();
    }, [navigate]);

    return;
};

export default LoginPage;