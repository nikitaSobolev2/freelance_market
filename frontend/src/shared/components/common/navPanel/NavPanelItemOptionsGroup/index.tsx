'use client'

import { Menu } from '@mantine/core'
import NavPanelItemOption from '../NavPanelItemOption'
import styles from './styles.module.scss'

export type ChildType = typeof NavPanelItemOption

export interface Props {
  children: React.ReactElement<ChildType> | React.ReactElement<ChildType>[],
  title: string
}

export default function NavPanelItemOptionsGroup({ children, title }: Props) {
  return (
    <>
      <Menu.Label>{title}</Menu.Label>
      {children}
    </>
  )
}
