'use client'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LabeledInput, { Props as LabeledInputProps } from '@/shared/components/form/LabeledInput'
import IconBadge from '@/shared/components/ui/IconBadge'

export type Props = Omit<LabeledInputProps, 'label' | 'placeholder' | 'type'>

export default function EmailField({ ...defaultProps }: Props) {
  return <LabeledInput placeholder='Почта' label={<IconBadge icon={faEnvelope} />} type='email' {...defaultProps} />
}
