import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Input } from '@src/components/input';
import { Button } from '@src/components/button';

import { useLogin } from './hooks/useLogin';

export const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutaion = useLogin();

  type FormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ({ email, password }: FormData) => {
    loginMutaion.mutate({ email, password });
  };

  return (
    <form
      className="h-2/6 w-[500px] text-center border-primary bg-[#141414] opacity-80 rounded-xl p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-primary font-bold text-3xl">Авторизация</p>

      <label className="block mb-1 text-sm text-primary text-start mt-24">Логин</label>
      <Input
        {...register('email', {
          required: 'Поле обязательно для заполнения',
        })}
        placeholder="Введите email"
        type="text"
        className={cn({
          'border-2 border-[#e63946]': errors.email,
        })}
        {...(errors.email && { errorMessage: errors.email.message })}
      />

      <label className="block mb-1 text-sm text-primary text-start mt-4">Пароль</label>
      <Input
        {...register('password', {
          required: 'Поле обязательно для заполнения',
        })}
        placeholder="Введите пароль"
        type="password"
        className={cn({
          'border-2 border-[#e63946]': errors.password,
        })}
        {...(errors.password && { errorMessage: errors.password.message })}
      />

      <Button className="mt-16 w-full" disabled={loginMutaion.isPending} isLoading={loginMutaion.isPending}>
        Войти
      </Button>
      <p className="text-sm text-primary mt-4 cursor-pointer" onClick={() => navigate('/register')}>
        Зарегистрироваться
      </p>
    </form>
  );
};
