import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import EmailField from '@/features/authentication/components/form/EmailField'

export default function ConfirmEmail() {
  return (
  <LoginLayout title="Подтверждение почты">
    <Form>
      <EmailField readOnly={true}/>
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
