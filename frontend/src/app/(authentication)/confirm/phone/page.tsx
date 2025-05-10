import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import PhoneField from '@/features/authentication/components/form/PhoneField'
import CodeInput from '@/shared/components/form/CodeInput'

export default function ConfirmPhone() {
  return (
  <LoginLayout title="Подтверждение номера телефона">
    <Form>
      <PhoneField readOnly={true} />
      <CodeInput label='Введите код подтверждения из СМС' length={6} />
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
