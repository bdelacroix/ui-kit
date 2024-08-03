import type { ButtonShape } from '@/components/button/types/ButtonShape'
import type { ButtonSize } from '@button/types/ButtonSize'
import type { ButtonType } from '@button/types/ButtonType'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
}
