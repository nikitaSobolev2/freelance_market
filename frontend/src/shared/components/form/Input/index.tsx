'use client'

import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  readOnly?: boolean
}

export default function Input({ className = '', readOnly = false, ...defaultProps }: Props) {
  return <input className={`${styles.input} ${className}`} {...defaultProps} readOnly={readOnly} />
}
