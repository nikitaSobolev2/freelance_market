'use client'

import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  readonly?: boolean
}

export default function Input({ className = '', readonly = false, ...defaultProps }: Props) {
  return <input className={`${styles.input} ${className}`} {...defaultProps} readOnly={readonly} />
}
