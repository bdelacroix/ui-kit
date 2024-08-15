<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { computed, toRefs } from 'vue'

interface Props {
  today: boolean
  sameMonth: boolean
  active: boolean
}

const props = defineProps<Props>()
const { today, sameMonth, active } = toRefs(props)

const variants = computed(() =>
  tv({
    base: 'rounded-full h-10 w-10',
    variants: {
      today: {
        true: 'bg-primary-200 text-primary-800',
      },
      sameMonth: {
        false: 'pointer-events-none opacity-90',
      },
      active: {
        true: 'bg-primary text-white .hover:opacity-90',
        false: 'hover:bg-primary-100 hover:text-primary-800',
      },
    },
    compoundVariants: [
      {
        sameMonth: false,
        active: false,
        class: 'text-gray-400',
      },
    ],
  })
)
</script>
<template>
  <button type="button" :class="variants({ today, sameMonth, active })">
    <slot></slot>
  </button>
</template>
