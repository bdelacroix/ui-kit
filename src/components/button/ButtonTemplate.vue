<script setup lang="ts">
import type { ButtonSize } from '@button/types/ButtonSize'
import type { ButtonType } from '@button/types/ButtonType'
import { tv } from 'tailwind-variants'

interface Props {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
}

const { type, size, disabled } = withDefaults(defineProps<Props>(), {
  type: 'button',
  size: 'large',
})

const buttonVariants = tv({
  base: 'truncate rounded-lg text-md font-semibold tracking-wider active:opacity-90',
  variants: {
    size: {
      small: 'text-sm px-3 py-1 h-8',
      large: 'text-md px-6 py-2 h-10',
      icon: 'p-2 h-10 w-10 stroke-[1.5px]',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
})
</script>

<template>
  <button :type :class="buttonVariants({ size, disabled })">
    <slot></slot>
  </button>
</template>
