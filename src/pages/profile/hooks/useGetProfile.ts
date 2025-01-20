import { useNavigate } from 'react-router-dom';

export const useGetProfile = () => {
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const response = await fetch('https://backend-ashen-seven-22.vercel.app/profile', {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 403) {
      navigate('/login');
      localStorage.removeItem('token');
    }

    if (!response.ok) {
      throw new Error('Ошибка при входе');
    }

    return response.json();
  };

  return fetchProfile;
};
