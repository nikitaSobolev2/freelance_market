'use client'

import { Menu } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  onClick: () => void
}

export default function NavPanelItemOption({ icon, title, onClick }: Props) {
  return (
    <Menu.Item
      className={styles.list__item}
      onClick={onClick}
      leftSection={<FontAwesomeIcon icon={icon} />}
    >
      {title}
    </Menu.Item>
  )
}
