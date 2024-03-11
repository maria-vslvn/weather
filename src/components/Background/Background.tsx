import { type ReactNode } from 'react';

interface ViewProps {
  children: ReactNode | ReactNode[];
}

export const Background = ({ children }: ViewProps) => {
  const gradient =
    'url(https://img.freepik.com/premium-vector/mountain-forest-river-sunset-sunrise-landscape_104785-1173.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais)';
  return (
    <div style={{ backgroundImage: gradient }} className={'flex-column flex-grow-1 align-items-center gap-6 py-6 px-6'}>
      {children}
    </div>
  );
};
