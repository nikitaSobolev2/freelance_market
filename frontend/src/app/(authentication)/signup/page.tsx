import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import UsernameField from '@/features/authentication/components/form/UsernameField'
import PasswordGroup from '@/features/authentication/components/form/PasswordGroup'
import styles from './styles.module.scss'

export default function Signup() {
  return (
  <LoginLayout title="Регистрация">
    <Form>
      <UsernameField readOnly={true} className={styles.input_field}/>
      <PasswordGroup className={styles.password_group} fieldClassName={styles.input_field}/>
      
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
