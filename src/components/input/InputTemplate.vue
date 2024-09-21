<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { tv } from 'tailwind-variants'

interface Props {
  disabled?: boolean
}

const props = defineProps<Props>()
const { disabled } = toRefs(props)

interface InputSlots {
  default: (props: { inputClass: string }) => unknown
  leftIcon?: (props: { iconClass: string }) => unknown
  rightIcon?: (props: { iconClass: string }) => unknown
}

const slots = defineSlots<InputSlots>()

const inputVariants = computed(() =>
  tv({
    base: 'rounded-lg bg-white shadow-md shadow-primary-50 flex items-center gap-4 w-full font-light text-neutral-400 p-4',
    variants: {
      disabled: {
        true: 'opacity-75',
      },
    },
  })
)
</script>

<template>
  <div :class="inputVariants({ disabled })">
    <div v-if="slots.leftIcon" class="flex">
      <slot name="leftIcon" icon-class="size-6"></slot>
    </div>

    <slot
      inputClass="text-neutral-900 placeholder:text-neutral-400 focus:outline-none w-full"
    ></slot>

    <div v-if="slots.rightIcon" class="flex">
      <slot name="rightIcon" icon-class="size-6"></slot>
    </div>
  </div>
</template>
