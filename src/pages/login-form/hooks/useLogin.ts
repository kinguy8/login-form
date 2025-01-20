import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@src/components/toast/context';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  type: string;
}

export const useLogin = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const loginMutation = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: async (payload) => {
      const response = await fetch('https://backend-ashen-seven-22.vercel.app/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Ошибка при входе');
      }

      return response.json();
    },
    onSuccess: (data) => {
      showToast({ message: 'Успешно вошли в систему', type: 'success' });
      console.log('Успешный вход:', data);
      localStorage.setItem('token', data.token);
      navigate('/profile');
    },
    onError: (error) => {
      showToast({ message: error.message, type: 'error' });
    },
  });

  return loginMutation;
};
