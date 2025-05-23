import LoginMethodsBlock from '@/features/authentication/components/blocks/LoginMethodsBlock'
import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import styles from './styles.module.scss'
import UsernameField from '@/features/authentication/components/form/UsernameField'

export default function Login() {
  return (
  <LoginLayout title="Вход или Регистрация">
    <Form>
      <UsernameField/>
      <AccentButton>Продолжить</AccentButton>
    </Form>
    <LoginMethodsBlock className={styles.login_methods} title='Или войти другим способом:' />
  </LoginLayout>
  )
}
