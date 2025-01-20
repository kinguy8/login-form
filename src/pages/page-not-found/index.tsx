import { Button } from '@src/components/button';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center flex-col items-center">
      <p className="text-primary text-4xl font-bold">Страница не найдена</p>
      <Button
        className="w-[200px] mt-1"
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </Button>
    </div>
  );
};
