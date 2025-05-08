'use client'

import Input from '../Input'
import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
  className?: string,
  readonly?: boolean
}

export default function LabeledInput({ label, className = '', readonly = false, ...defaultProps }: Props) {
  return (
    <label className={`${styles.labeled_input} ${className}`}>
      <span className={styles.labeled_input__label}>{label}</span>
      <Input className={styles.labeled_input__input} {...defaultProps} readOnly={readonly} />
    </label>
  )
}
