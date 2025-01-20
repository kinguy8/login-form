import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Input } from '@src/components/input';
import { Button } from '@src/components/button';

import { useRegistration } from './hooks/useRegistration';

export const RegisterForm = () => {
  const navigate = useNavigate();

  type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
    loginAfterRegistration: boolean;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const passwordWatch = watch('password');
  const loginAfterRegistrationWatch = watch('loginAfterRegistration');

  const registerMutation = useRegistration({ isLoginAfterRegistration: loginAfterRegistrationWatch });

  const onSubmit = ({ email, password }: FormData) => {
    registerMutation.mutate({ email, password });
  };

  return (
    <form
      className="h-2/6 w-[500px] text-center border-primary bg-[#141414] opacity-80 rounded-xl p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-primary font-bold text-3xl">Регистрация</p>

      <div className="mt-24">
        <label className="block mb-1 text-sm text-primary text-start">Логин</label>
        <Input
          {...register('email', {
            required: 'Поле обязательно для заполнения',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Введите корректный email',
            },
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
            maxLength: 20,
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message: 'Пароль должен содержать минимум одну заглавную букву, одну цифру и один специальный символ',
            },
          })}
          placeholder="Введите пароль"
          type="password"
          className={cn({
            'border-2 border-[#e63946]': errors.password,
          })}
          {...(errors.password && { errorMessage: errors.password.message })}
        />

        <label className="block mb-1 text-sm text-primary text-start mt-4">Подтвердите пароль</label>
        <Input
          {...register('confirmPassword', {
            required: 'Подтверждение пароля обязательно',
            validate: (value) => value === passwordWatch || 'Пароли не совпадают',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message: 'Пароль должен содержать минимум одну заглавную букву, одну цифру и один специальный символ',
            },
          })}
          placeholder="Введите пароль еще раз"
          type="password"
          className={cn({
            'border-2 border-[#e63946]': errors.confirmPassword,
          })}
          {...(errors.confirmPassword && { errorMessage: errors.confirmPassword.message })}
        />

        <div className="flex items-center mt-2">
          <input
            {...register('loginAfterRegistration')}
            type="checkbox"
            id="loginAfterRegistration"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            className="text-primary  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="loginAfterRegistration"
          >
            Выполнить вход после успешной регистрации
          </label>
        </div>

        <p className="text-sm text-primary mt-8 flex">
          Есть аккаунт?{' '}
          <p onClick={() => navigate('/login')} className="cursor-pointer ml-2 border-b-2">
            Войти
          </p>
        </p>

        <Button className="mt-4 w-full" isLoading={registerMutation.isPending}>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};
