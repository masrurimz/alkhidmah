import Image from 'next/image';
import { ReactElement } from 'react';
import backgroundImage from '../assets/img/background.jpg';

interface AuthLayoutProps {
  children: ReactElement;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Image
        alt="background image"
        src={backgroundImage}
        className="absolute object-cover -z-1"
        fill
      />
      <div className="flex flex-col h-screen justify-center item-center">
        {children}
      </div>
    </>
  );
};
