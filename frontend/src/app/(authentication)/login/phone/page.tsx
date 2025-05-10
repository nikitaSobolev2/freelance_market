import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import PhoneField from '@/features/authentication/components/form/PhoneField'

export default function LoginPhone() {
  return (
  <LoginLayout title="Вход через номер телефона">
    <Form>
      <PhoneField/>
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
