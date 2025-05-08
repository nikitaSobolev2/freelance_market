'use client'

import PureButton, { Props as PureButtonProps } from '../PureButton'
import styles from './styles.module.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import IconBadge from '../../IconBadge'

export interface Props extends PureButtonProps {
  icon: IconProp,
  children?: React.ReactNode
}

export default function IconButton({ icon, className = '' , children=null, ...defaultProps }: Props) {
  return (
    <PureButton className={`${styles.icon_button} ${className}`} {...defaultProps} >
      <IconBadge icon={icon} className={styles.icon_button__icon} />
      <span className={styles.icon_button__label}>{children}</span>
    </PureButton>
  )
}
