'use client'

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import LabeledInput, { Props as LabeledInputProps } from '@/shared/components/form/LabeledInput'
import IconBadge from '@/shared/components/ui/IconBadge'

export type Props = Omit<LabeledInputProps, 'label' | 'placeholder' | 'type'>

export default function PhoneField({ ...defaultProps }: Props) {
  return <LabeledInput placeholder='Номер телефона' label={<IconBadge icon={faPhone} />} type='tel' {...defaultProps} />
}
