<script setup lang="ts">
import type { ButtonSize } from '@button/types/ButtonSize'
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
import type { ButtonType } from '@button/types/ButtonType'
import type { Color } from '@/types/Color'
import { computed } from 'vue'
import { variants } from 'classname-variants'

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

const outlineColorVariants = computed(() =>
  variants({
    variants: {
      color: {
        primary: 'bg-primary-100 hover:bg-primary-200 text-primary-800',
      },
    },
  })
)
</script>

<template>
  <ButtonTemplate :type :disabled :size :class="outlineColorVariants({ color })">
    <slot></slot>
  </ButtonTemplate>
</template>
