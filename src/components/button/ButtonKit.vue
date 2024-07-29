<script setup lang="ts">
import type { ButtonSize } from '@button/types/ButtonSize'
import ButtonTemplate from '@button/ButtonTemplate.vue'
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

const colorVariants = tv({
  base: 'hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-primary text-primary-50',
    },
  },
})
</script>

<template>
  <ButtonTemplate :type :disabled :size :class="colorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
