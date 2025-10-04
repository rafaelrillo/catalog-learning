'use client'

import { ReactNode } from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false 
}) => {
  
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return(
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >{children}</button>
  )
}