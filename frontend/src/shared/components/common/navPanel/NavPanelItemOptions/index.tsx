'use client'

import { Menu } from '@mantine/core'
import NavPanelItemOption from '../NavPanelItemOption'
import NavPanelItemOptionsGroup from '../NavPanelItemOptionsGroup'
import styles from './styles.module.scss'

type OptionChildType = typeof NavPanelItemOption
type OptionGroupChildType = typeof NavPanelItemOptionsGroup

export type ChildType = OptionChildType | OptionGroupChildType

export interface Props {
  children: React.ReactElement<ChildType>
  | React.ReactElement<ChildType>[]
}

export default function NavPanelItemOptions({ children }: Props) {
  return <Menu.Dropdown className={styles.item__list}>{children}</Menu.Dropdown>
}
