import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import PasswordField from '@/features/authentication/components/form/PasswordField'
import UsernameField from '@/features/authentication/components/form/UsernameField'

export default function LoginUsername() {
  return (
  <LoginLayout title="Вход через логин и пароль">
    <Form>
      <UsernameField/>
      <PasswordField/>
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
