import LoginLayout from '@/features/authentication/pages/LoginLayout'
import Form from '@/shared/components/form/Form'
import AccentButton from '@/shared/components/ui/buttons/AccentButton'
import UsernameField from '@/features/authentication/components/form/UsernameField'
import PasswordGroup from '@/features/authentication/components/form/PasswordGroup'
import FullNameGroup from '@/features/authentication/components/form/FullNameGroup'
import PhoneField from '@/features/authentication/components/form/PhoneField'
import EmailField from '@/features/authentication/components/form/EmailField'
import LabeledInputGroup from '@/shared/components/form/LabeledInputGroup'
import styles from './styles.module.scss'

export default function Signup() {
  const confirmedData = {
    username: {
      value: 'test_username',
      needValue: true,
    },
    phone: {
      value: '+79999999999',
      needValue: false,
    },
    email: {
      value: 'test@test.com',
      needValue: false,
    },
  };

  return (
  <LoginLayout title="Регистрация">
    <Form className={styles.form}>
      <LabeledInputGroup>
        {confirmedData.username.value ? (
          <UsernameField readOnly={true} value={confirmedData.username.value}/>
        ) : null}
        {confirmedData.phone.value ? (
          <PhoneField readOnly={true} value={confirmedData.phone.value}/>
        ) : null}
        {confirmedData.email.value ? (
          <EmailField readOnly={true} value={confirmedData.email.value}/>
        ) : null}
      </LabeledInputGroup>
      <LabeledInputGroup>
        {(confirmedData.username.needValue && !confirmedData.username.value) ? (
          <UsernameField value={confirmedData.username.value}/>
        ) : null}
        {(confirmedData.phone.needValue && !confirmedData.phone.value) ? (
          <PhoneField value={confirmedData.phone.value}/>
        ) : null}
        {(confirmedData.email.needValue && !confirmedData.email.value) ? (
          <EmailField value={confirmedData.email.value}/>
        ) : null}
      </LabeledInputGroup>

      <FullNameGroup className={styles.fullname_group} fieldClassName={styles.input_field}/>
      <PasswordGroup className={styles.password_group} fieldClassName={styles.input_field}/>
      
      <AccentButton>Продолжить</AccentButton>
    </Form>
  </LoginLayout>
  )
}
