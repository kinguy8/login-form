import { ReactNode } from 'react';
import blink from '@src/assets/blink.png';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="bg-theme h-screen flex min-h-full flex-col justify-center px-60 py-24">
      <img src={blink} className="fixed w-[1200px] left-[35%] bottom-[5%] opacity-65" />
      <div className="z-10">{children}</div>
    </div>
  );
};
