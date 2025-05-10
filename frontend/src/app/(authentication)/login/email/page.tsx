import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import EmailField from '@/features/authentication/components/form/EmailField'

export default function LoginEmail() {
  return (
  <LoginLayout title="Вход через почту">
    <Form>
      <EmailField/>
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
