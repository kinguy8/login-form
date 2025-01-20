import { Button } from '@src/components/button';
import { Skeleton } from '@src/components/skeleton';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useGetProfile, ProfileResponse } from './hooks';

export const Profile = () => {
  const navigate = useNavigate();
  const fetchProfile = useGetProfile();

  const { data, isPending } = useQuery<ProfileResponse, Error>({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex gap-9">
      <div className="w-[300px] h-[600px] flex flex-col justify-between">
        <div className="">
          {isPending ? (
            <Skeleton className="h-[100px] w-[100px] border rounded-3xl" />
          ) : (
            <img
              className="h-[100px] border border-primary p-2 rounded-3xl"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bower/bower-original.svg"
            />
          )}

          {isPending ? (
            <Skeleton className="h-[25px] border rounded-3xl mt-2" />
          ) : (
            <p className="text-primary text-2xl mt-2">Привет, {data?.email}!</p>
          )}

          {isPending ? (
            <Skeleton className="h-[18px] border rounded-3xl mt-2" />
          ) : (
            <p className="text-primary text-lg">Амбассадор LayerZero</p>
          )}

          {isPending ? (
            <Skeleton className="h-[18px] border rounded-3xl mt-2" />
          ) : (
            <p className="text-primary text-lg">Какие-то данные</p>
          )}

          {isPending ? (
            <Skeleton className="h-[18px] border rounded-3xl mt-2" />
          ) : (
            <p className="text-primary text-lg">Еще какие-то данные</p>
          )}
        </div>

        <Button onClick={handleLogout} className="mt-10">
          Выйти
        </Button>
      </div>

      <div className="border border-primary rounded-xl w-2/4 p-4">
        {isPending ? <Skeleton className="h-[25px]" /> : <p className="text-primary text-lg">Какой-то контент..</p>}
      </div>
    </div>
  );
};
