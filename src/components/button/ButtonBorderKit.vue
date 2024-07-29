<script setup lang="ts">
import type { ButtonSize } from '@button/types/ButtonSize'
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
import type { ButtonType } from '@button/types/ButtonType'
import type { Color } from '@/types/Color'
import { tv } from 'tailwind-variants'

interface Props {
  color?: Color
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
}

const { color, type, size, disabled } = withDefaults(defineProps<Props>(), {
  color: 'primary',
  type: 'button',
  size: 'large',
  disabled: false,
})

const borderColorVariants = tv({
  base: '',
  variants: {
    color: {
      primary: 'text-primary-800 shadow-[0_0_0_2px_inset] shadow-primary-100 hover:bg-primary-100',
    },
  },
})
</script>

<template>
  <ButtonTemplate :type :disabled :size :class="borderColorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
