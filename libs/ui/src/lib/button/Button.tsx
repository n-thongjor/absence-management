import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
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

export function Button({ color = 'default', ...props }: ButtonProps) {
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
    <button
      type="button"
      className={twMerge('btn', colorClass)}
      {...props}
    ></button>
  );
}

export default Button;
