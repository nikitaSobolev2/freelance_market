'use client'

import { Children, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Menu } from '@mantine/core'
import PureButton from '@/shared/components/ui/buttons/PureButton'
import NavPanelItemOptions, {
  ChildType as NavPanelItemOptionsChildType,
} from '../NavPanelItemOptions'
import useLinkActivity from '@/shared/hooks/useLinkActivity'
import styles from './styles.module.scss'

interface Props {
  icon: IconProp
  title: string
  children?:
    | React.ReactElement<NavPanelItemOptionsChildType>
    | React.ReactElement<NavPanelItemOptionsChildType>[]
  href: string
}

export default function NavPanelItem({ icon, title, href, children }: Props) {
  const { isActive: isLinkActive } = useLinkActivity(href)
  const [isOptionsActive, setIsOptionsActive] = useState<boolean>(false)
  const hasChildren = children && Children.count(children) > 0

  const contextMenuHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(Children.count(children))

    openOptions()
  }

  const openOptions = () => setIsOptionsActive(true)

  return (
    <Menu
      opened={isOptionsActive}
      trapFocus={true}
      onChange={setIsOptionsActive}
      zIndex={99999999}
      // withinPortal={false}
      closeOnClickOutside={true}
      shadow='md'
      width={200}
    >
      <Menu.Target>
        <PureButton
          disabled={isLinkActive}
          href={href}
          label={title}
          className={`${styles.item__btn} 
          ${
            hasChildren ? styles.item__btn_with_children : ''
          } 
          ${
            isLinkActive ? styles.btn_active : ''
          }`}
          onContextMenu={contextMenuHandler}
        >
          <FontAwesomeIcon icon={icon} className={styles.btn__icon} />
        </PureButton>
      </Menu.Target>
      {hasChildren && (
        <NavPanelItemOptions>{children}</NavPanelItemOptions>
      )}
    </Menu>
  )
}
