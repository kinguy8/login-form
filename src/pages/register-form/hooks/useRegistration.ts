import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@src/components/toast/context';

interface RegisterData {
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
  type: string;
}

interface UseRegistrationProps {
  isLoginAfterRegistration: boolean;
}

export const useRegistration = ({ isLoginAfterRegistration }: UseRegistrationProps) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const registerMutation = useMutation<RegisterResponse, Error, RegisterData>({
    mutationFn: async (payload) => {
      const response = await fetch('https://backend-ashen-seven-22.vercel.app/register', {
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
      showToast({ message: 'Аккаунт успешно создан', type: 'success' });
      if (isLoginAfterRegistration) {
        localStorage.setItem('token', data.token);
        navigate('/profile');
      }
    },
    onError: (error) => {
      showToast({ message: error.message, type: 'error' });
    },
  });

  return registerMutation;
};
