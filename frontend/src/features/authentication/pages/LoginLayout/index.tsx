'use client'

import styles from './styles.module.scss'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import IconBadge from '@/shared/components/ui/IconBadge'
import LabeledInput from '@/shared/components/form/LabeledInput'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import LoginMethodsBlock from '../../components/blocks/LoginMethodsBlock'

export default function LoginLayout() {
  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        <h1 className={styles.main__title}>Вход или<br/>Регистрация</h1>
        <Form className={styles.main__form}>
          <LabeledInput placeholder='Юзернейм' label={<IconBadge icon={faAt} />} type='text' />
          <AccentButton>Продолжить</AccentButton>
        </Form>
        <LoginMethodsBlock className={styles.main__login_methods} title='Или войти другим способом:' />
      </section>
    </main>
  )
}
