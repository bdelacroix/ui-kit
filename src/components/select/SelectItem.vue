<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { SelectSize } from '@select/types/SelectSize'
import { tv } from 'tailwind-variants'

interface Props {
  active: boolean
  size?: SelectSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
})
const { active, size } = toRefs(props)

const selectItemVariants = computed(() =>
  tv({
    base: 'rounded-lg px-3 py-1 hover:bg-neutral-100 text-left',
    variants: {
      active: {
        true: 'bg-neutral-200',
      },
      size: {
        small: 'text-sm',
        large: 'text-md',
      },
    },
  })
)
</script>

<template>
  <button type="button" :class="selectItemVariants({ active, size })">
    <slot></slot>
  </button>
</template>
