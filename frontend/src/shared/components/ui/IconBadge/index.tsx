'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  className?: string
}

export default function IconBadge({ icon, className='' }: Props) {

  return (
    <div className={`${styles.icon_badge} ${className}`}>
      <FontAwesomeIcon icon={icon} className={styles.icon_badge__icon} />
    </div>
  )
}
