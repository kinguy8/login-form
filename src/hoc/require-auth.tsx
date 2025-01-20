import { Navigate, useLocation } from 'react-router-dom';
import { JSX } from 'react';

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
