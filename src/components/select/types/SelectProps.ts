import type { SelectOption } from '@select/types/SelectOption'
import type { SelectSize } from '@select/types/SelectSize'

export interface SelectProps<T> {
  options: SelectOption<T>[]
  label: string
  placeholder: string
  size?: SelectSize
  disabled?: boolean
}
