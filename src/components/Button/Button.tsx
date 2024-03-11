import { type ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  label: string;
  type?: 'submit' | 'reset' | 'button';
  severity?: string;
}

export const Button = ({ icon, label, type = 'submit', severity = 'primary' }: ButtonProps) => {
  return (
    <button className={`btn btn-${severity}`} type={type}>
      {icon}
      <span className={'btn-lbl'}>{label}</span>
    </button>
  );
};
