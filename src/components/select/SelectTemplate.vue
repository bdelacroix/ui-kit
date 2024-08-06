<script setup lang="ts" generic="T">
import { computed, ref, toRefs } from 'vue'
import { CardKit } from '@card'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { onClickOutside } from '@vueuse/core'
import type { SelectProps } from '@select/types/SelectProps'
import { tv } from 'tailwind-variants'

const props = withDefaults(defineProps<SelectProps<T>>(), {
  size: 'large',
  disabled: false,
})
const { options, label, placeholder, size, disabled } = toRefs(props)

const selectVariants = computed(() =>
  tv({
    slots: {
      wrapper: 'relative w-fit text-neutral-800',
      button: 'rounded-lg bg-neutral-100 flex items-center gap-8 text-neutral-900 w-full',
      icon: 'h-4 w-4 ml-auto',
    },
    variants: {
      size: {
        small: { wrapper: 'text-sm', button: 'h-8 px-3 py-1' },
        large: { wrapper: 'text-md', button: 'h-10 px-4 py-3' },
      },
      disabled: {
        true: { button: 'pointer-events-none opacity-50' },
      },
    },
  })
)
const { wrapper, button, icon } = selectVariants.value({
  size: size.value,
  disabled: disabled.value,
})

const isOpen = ref(false)
const select = ref<HTMLElement>()

function closeSelect(): void {
  isOpen.value = false
}

onClickOutside(select, closeSelect)
</script>

<template>
  <div ref="select" :class="wrapper()">
    <button type="button" :class="button()" @click="isOpen = !isOpen">
      <slot name="placeholder" :label :placeholder></slot>
      <ChevronUpIcon :class="[icon(), { 'rotate-180': true === isOpen }]" />
    </button>

    <CardKit v-show="true === isOpen" class="absolute flex flex-col gap-0.5 mt-1 z-50 w-full">
      <template v-for="option in options">
        <slot name="option" v-bind="option" :close-select></slot>
      </template>
    </CardKit>
  </div>
</template>
