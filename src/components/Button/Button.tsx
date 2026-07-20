import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Seleciona a classe com base na variante escolhida
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary;

  return (
    <button 
      className={`${styles.button} ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;