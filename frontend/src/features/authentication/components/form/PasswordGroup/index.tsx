'use client'

import LabeledInputGroup, { Props as LabeledInputGroupProps } from '@/shared/components/form/LabeledInputGroup'
import PasswordField from '../PasswordField'

export interface Props extends LabeledInputGroupProps {
  fieldClassName?: string
}

export default function PasswordGroup({ fieldClassName='', ...defaultProps }: Props) {
  return (
    <LabeledInputGroup {...defaultProps}>
      <PasswordField label='Пароль' placeholder='**************' className={fieldClassName}/>
      <PasswordField label='Повторите пароль' placeholder='**************' className={fieldClassName}/>
    </LabeledInputGroup>
  )
}
