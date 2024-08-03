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
  base: 'hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-primary text-primary-50',
    },
  },
})
</script>

<template>
  <ButtonTemplate :type :size :shape :disabled :class="colorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
