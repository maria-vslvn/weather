import { type ReactNode } from 'react';

interface ViewProps {
  children: ReactNode;
}

export const Layout = ({ children }: ViewProps) => {
  return <div className={'container'}>{children}</div>;
};
