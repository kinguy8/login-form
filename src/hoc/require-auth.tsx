import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const location = useLocation();

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
