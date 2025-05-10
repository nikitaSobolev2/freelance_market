'use client'

import { faAt } from '@fortawesome/free-solid-svg-icons'
import LabeledInput, { Props as LabeledInputProps } from '@/shared/components/form/LabeledInput'
import IconBadge from '@/shared/components/ui/IconBadge'

export type Props = Omit<LabeledInputProps, 'label' | 'placeholder' | 'type'>

export default function UsernameField({ ...defaultProps }: Props) {
  return <LabeledInput placeholder='Юзернейм' label={<IconBadge icon={faAt} />} type='text' {...defaultProps} />
}
