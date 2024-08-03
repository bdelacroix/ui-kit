<script setup lang="ts">
import ButtonTemplate from '@button/ButtonTemplate.vue'
import type { ButtonProps } from '@button/types/ButtonProps'
import type { Color } from '@/types/Color'
import { tv } from 'tailwind-variants'

interface Props extends ButtonProps {
  color?: Color
}

const { color, type, size, shape, disabled } = withDefaults(defineProps<Props>(), {
  color: 'primary',
  type: 'button',
  size: 'large',
  shape: 'normal',
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
  <ButtonTemplate :type :size :shape :disabled :class="borderColorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
