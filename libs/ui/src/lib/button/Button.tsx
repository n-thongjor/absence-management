import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warn'
    | 'info'
    | 'default';
  children: ReactNode;
}

export function Button({ color = 'default', children }: ButtonProps) {
  const colorClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warn: 'btn-warn',
    info: 'btn-info',
    default: 'btn-default',
  }[color];

  return (
    <button type="button" className={twMerge('btn', colorClass)}>
      {children}
    </button>
  );
}

export default Button;
