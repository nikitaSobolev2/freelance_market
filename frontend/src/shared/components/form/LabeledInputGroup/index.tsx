'use client'

import { Props as LabeledInputProps } from '../LabeledInput'
import styles from './styles.module.scss'

export type ChildType = LabeledInputProps

export interface Props {
  children?: React.ReactElement<ChildType> | React.ReactElement<ChildType>[],
  className?: string
}

export default function LabeledInputGroup({ children, className }: Props) {
  return (
    <fieldset className={`${styles.labeled_input_group} ${className}`}>
      {children}
    </fieldset>
  )
}
