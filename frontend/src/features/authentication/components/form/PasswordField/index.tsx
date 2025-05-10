'use client'

import { faKey } from '@fortawesome/free-solid-svg-icons'
import LabeledInput, { Props as LabeledInputProps } from '@/shared/components/form/LabeledInput'
import IconBadge from '@/shared/components/ui/IconBadge'

export interface Props extends Omit<LabeledInputProps, 'type' | 'label'> {
  label?: React.ReactNode
  placeholder?: string
}

export default function PasswordField({ label = <IconBadge icon={faKey} />, placeholder = 'Пароль', ...defaultProps }: Props) {
  return <LabeledInput placeholder={placeholder} label={label} type='password' {...defaultProps} />
}
