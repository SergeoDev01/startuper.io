import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'lg';
}

const sizeVariants: Record<NonNullable<ButtonProps['size']>, string> = {
  default: 'h-9 px-4 py-2',
  lg: 'h-11 px-6 py-3 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          sizeVariants[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
