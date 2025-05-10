'use client'

import LabeledInputGroup, { Props as LabeledInputGroupProps } from '@/shared/components/form/LabeledInputGroup'
import LabeledInput from '@/shared/components/form/LabeledInput'

export interface Props extends LabeledInputGroupProps {
  fieldClassName?: string
}

export default function FullNameGroup({ fieldClassName='', ...defaultProps }: Props) {
  return (
    <LabeledInputGroup {...defaultProps}>
      <LabeledInput label='Имя' placeholder='Имя' className={fieldClassName}/>
      <LabeledInput label='Фамилия' placeholder='Фамилия' className={fieldClassName}/>
      <LabeledInput label='Отчество' placeholder='Отчество' className={fieldClassName}/>
    </LabeledInputGroup>
  )
}
