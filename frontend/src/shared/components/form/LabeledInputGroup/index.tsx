'use client'

import { Props as LabeledInputProps } from '../LabeledInput'
import styles from './styles.module.scss'

export type ChildType = React.ReactElement<LabeledInputProps> | undefined | null | string

export interface Props {
  children?: ChildType | ChildType[],
  className?: string
}

export default function LabeledInputGroup({ children, className }: Props) {
  return (
    <fieldset className={`${styles.labeled_input_group} ${className}`}>
      {children}
    </fieldset>
  )
}
