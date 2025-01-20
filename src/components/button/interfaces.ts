import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
}
