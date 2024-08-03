<script setup lang="ts">
import type { ButtonShape } from '@/components/button/types/ButtonShape'
import type { ButtonSize } from '@button/types/ButtonSize'
import type { ButtonType } from '@button/types/ButtonType'
import { tv } from 'tailwind-variants'

interface Props {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
}

const { type, size, shape, disabled } = withDefaults(defineProps<Props>(), {
  type: 'button',
  size: 'large',
  shape: 'normal',
})

const buttonVariants = tv({
  base: 'truncate rounded-lg text-md font-semibold tracking-wider active:opacity-90',
  variants: {
    size: {
      small: 'text-sm h-8',
      large: 'text-md h-10',
    },
    shape: {
      normal: '',
      icon: 'stroke-[1.5px]',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  compoundVariants: [
    { size: 'small', shape: 'normal', class: 'px-3 py-1' },
    { size: 'small', shape: 'icon', class: 'p-1.5 w-8' },
    { size: 'large', shape: 'normal', class: 'px-6 py-2' },
    { size: 'large', shape: 'icon', class: 'p-2 w-10' },
  ],
})
</script>

<template>
  <button :type :class="buttonVariants({ size, shape, disabled })">
    <slot></slot>
  </button>
</template>
