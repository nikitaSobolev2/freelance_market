'use client'

import styles from './styles.module.scss'
import IconButton from '@/shared/components/ui/buttons/IconButton'
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

interface Props {
  className?: string,
  title?: string,
}

export default function LoginMethodsBlock({ className = '', title = 'Выберите способ входа' }: Props) {
  return (
    <div className={`${styles.login_methods_block} ${className}`}>
      <p className={styles.login_methods_block__title}>{title}</p>
      <ul className={styles.login_methods_block__list}>
        <li className={styles.login_methods_block__item}>
          <IconButton icon={faGoogle} className={styles.login_methods_block__button} >
            <span>Продолжить с Google</span>
          </IconButton>
        </li>
        <li className={styles.login_methods_block__item}>
          <IconButton icon={faApple} className={styles.login_methods_block__button} >
            <span>Продолжить с Apple</span>
          </IconButton>
        </li>
        <li className={styles.login_methods_block__item}>
          <IconButton icon={faPhone} className={styles.login_methods_block__button} >
            <span>Продолжить через телефон</span>
          </IconButton>
        </li>
      </ul>
    </div>
  )
}
