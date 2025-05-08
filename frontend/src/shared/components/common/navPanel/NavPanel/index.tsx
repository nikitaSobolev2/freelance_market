'use client'

import {
  faChartLine,
  faComments,
  faHouse,
  faRightToBracket,
  faStore,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import NavPanelList from '../NavPanelList'
import NavPanelItem from '../NavPanelItem'
import NavPanelItemOption from '../NavPanelItemOption'
import styles from './styles.module.scss'

interface Props {}

export default function NavPanel({}: Props) {
  return (
    <nav aria-label='Mobile Navigation Panel' className={styles.nav_panel}>
      <NavPanelList>
        <NavPanelItem href='/' title='Главная' icon={faHouse} />
        <NavPanelItem href='/market' title='Биржа' icon={faStore}>
          <NavPanelItemOption
            icon={faHouse}
            title={'Каталог'}
            href='/'
          />
          <NavPanelItemOption
            icon={faHouse}
            title={'Мои заказы'}
            href='/'
          />
          <NavPanelItemOption
            icon={faHouse}
            title={'Новый кворум'}
            href='/'
          />
        </NavPanelItem>
        <NavPanelItem href='/stats' title='Статистика' icon={faChartLine} />
        <NavPanelItem href='/chats' title='Чаты' icon={faComments} />
        <NavPanelItem href='/profile' title='Профиль' icon={faUser}>
          <NavPanelItemOption
            icon={faHouse}
            title={'Главная'}
            href='/'
          />
        </NavPanelItem>
      </NavPanelList>
    </nav>
  )
}
