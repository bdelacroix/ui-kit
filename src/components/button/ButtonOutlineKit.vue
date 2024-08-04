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

const outlineColorVariants = tv({
  variants: {
    color: {
      primary: 'bg-primary-100 hover:bg-primary-200 active:opacity-90 text-primary-800',
    },
  },
})
</script>

<template>
  <ButtonTemplate :type :size :shape :disabled :class="outlineColorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
