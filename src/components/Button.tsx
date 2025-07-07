import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'font-bold border-4 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2';
  
  const variantClasses = {
    primary: 'bg-brutal-yellow hover:bg-yellow-300 shadow-brutal hover:shadow-brutal-sm active:shadow-none',
    secondary: 'bg-brutal-cyan hover:bg-cyan-300 shadow-brutal hover:shadow-brutal-sm active:shadow-none',
    danger: 'bg-brutal-pink hover:bg-pink-400 shadow-brutal hover:shadow-brutal-sm active:shadow-none',
    success: 'bg-brutal-lime hover:bg-lime-400 shadow-brutal hover:shadow-brutal-sm active:shadow-none'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
