'use client'

import { Menu } from '@mantine/core'
import NavPanelItemOption from '../NavPanelItemOption'
import styles from './styles.module.scss'

export type ChildType = typeof NavPanelItemOption

export interface Props {
  children: React.ReactElement<ChildType> | React.ReactElement<ChildType>[]
}

export default function NavPanelItemOptions({ children }: Props) {
  return <Menu.Dropdown className={styles.item__list}>{children}</Menu.Dropdown>
}
