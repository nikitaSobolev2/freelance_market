'use client'

import {
  faChartLine,
  faComments,
  faHouse,
  faStore,
  faUser,
  faPlus,
  faLayerGroup,
  faBars,
  faRightFromBracket,
  faGear,
  faBookmark,
  faInfoCircle,
  faWallet
} from '@fortawesome/free-solid-svg-icons'
import NavPanelList from '../NavPanelList'
import NavPanelItem from '../NavPanelItem'
import NavPanelItemOption from '../NavPanelItemOption'
import styles from './styles.module.scss'
import NavPanelItemOptionsGroup from '../NavPanelItemOptionsGroup'
import { Menu } from '@mantine/core'

interface Props {}

export default function NavPanel({}: Props) {
  return (
    <nav aria-label='Mobile Navigation Panel' className={styles.nav_panel}>
      <NavPanelList>
        <NavPanelItem href='/' title='Главная' icon={faHouse} >
          <NavPanelItemOptionsGroup title='Основное'>
            <NavPanelItemOption
              icon={faHouse}
              title={'Главная'}
              href='/'
            />
            <NavPanelItemOption
              icon={faInfoCircle}
              title={'О нас'}
              href='/'
            />
            <NavPanelItemOption
              icon={faWallet}
              title={'Вывод и пополнение'}
              href='/'
            />
          </NavPanelItemOptionsGroup>
        </NavPanelItem>
        <NavPanelItem href='/market' title='Биржа' icon={faStore}>
          <NavPanelItemOptionsGroup title='Основное'>
            <NavPanelItemOption
              icon={faStore}
              title={'Биржа'}
              href='/market'
            />
            <NavPanelItemOption
              icon={faLayerGroup}
              title={'Мои заказы'}
              href='/'
            />
            <NavPanelItemOption
              icon={faBookmark}
              title={'Избранное'}
              href='/'
            />
          </NavPanelItemOptionsGroup>
          <Menu.Divider />
          <NavPanelItemOptionsGroup title='Кворумы'>
            <NavPanelItemOption
              icon={faBars}
              title={'Мои кворумы'}
              href='/'
            />
            <NavPanelItemOption
              icon={faPlus}
              title={'Новый кворум'}
              href='/'
            />
          </NavPanelItemOptionsGroup>
        </NavPanelItem>
        {/* <NavPanelItem href='/stats' title='Статистика' icon={faChartLine} /> */}
        <NavPanelItem href='/chats' title='Чаты' icon={faComments} />
        <NavPanelItem href='/profile' title='Профиль' icon={faUser}>
          <NavPanelItemOptionsGroup title='Основное'>
            <NavPanelItemOption
              icon={faUser}
              title={'Профиль'}
              href='/profile'
            />
            <NavPanelItemOption
              icon={faChartLine}
              title={'Статистика'}
              href='/stats'
            />
            <NavPanelItemOption
              icon={faGear}
              title={'Настройки'}
              href='/'
            />
          </NavPanelItemOptionsGroup>
          <Menu.Divider />
          <NavPanelItemOption
            icon={faRightFromBracket}
            title={'Выйти'}
            href='/'
            className={styles.option_danger}
          />
        </NavPanelItem>
      </NavPanelList>
    </nav>
  )
}
