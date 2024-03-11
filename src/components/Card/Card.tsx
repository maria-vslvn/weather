import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  fullWidth?: boolean;
}

export const Card = ({ children, title, fullWidth }: CardProps) => {
  return (
    <div className={`${fullWidth ? 'w-100' : ' mw-60'} card`}>
      {title && <div className={'card-title w-100'}>{title}</div>}
      <div className={`${fullWidth ? 'row' : 'flex gap-6 w-100'} card-body`}>{children}</div>
    </div>
  );
};
