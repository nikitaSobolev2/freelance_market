'use client'

import { Menu } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  href: Url
}

export default function NavPanelItemOption({ icon, title, href }: Props) {
  return (
    <Menu.Item
      className={styles.list__item}
      component={Link}
      href={href}
      leftSection={<FontAwesomeIcon icon={icon} />}
    >
      {title}
    </Menu.Item>
  )
}
