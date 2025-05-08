'use client'

import { Menu } from '@mantine/core'
import NavPanelItemOption from '../NavPanelItemOption'
import NavPanelItemOptionsGroup from '../NavPanelItemOptionsGroup'
import styles from './styles.module.scss'

export type OptionChildType = typeof NavPanelItemOption
export type OptionGroupChildType = typeof NavPanelItemOptionsGroup

export interface Props {
  children: React.ReactElement<OptionChildType>
  | React.ReactElement<OptionChildType>[]
  | React.ReactElement<OptionGroupChildType>
  | React.ReactElement<OptionGroupChildType>[]
}

export default function NavPanelItemOptions({ children }: Props) {
  return <Menu.Dropdown className={styles.item__list}>{children}</Menu.Dropdown>
}
