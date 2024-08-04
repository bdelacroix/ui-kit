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

const colorVariants = tv({
  variants: {
    color: {
      primary: 'text-primary-50 bg-primary hover:bg-primary-600 active:bg-primary-800',
    },
  },
})
</script>

<template>
  <ButtonTemplate :type :size :shape :disabled :class="colorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
