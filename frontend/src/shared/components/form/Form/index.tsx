'use client'

import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLFormElement> {
  className?: string
  children?: React.ReactNode
}

export default function Form({ children=null, className = '', ...defaultProps }: Props) {
  return <form className={`${styles.form} ${className}`} {...defaultProps}>
    {children}
  </form>
}
