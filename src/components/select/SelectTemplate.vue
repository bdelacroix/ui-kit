<script setup lang="ts" generic="T">
import { computed, ref, toRefs } from 'vue'
import CardKit from '@card/CardKit.vue'
import CardToggleTemplate from '@card/CardToggleTemplate.vue'
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
const { button, icon } = selectVariants.value({
  size: size.value,
  disabled: disabled.value,
})

const open = ref(false)
const select = ref<HTMLElement>()

function closeSelect(): void {
  open.value = false
}

onClickOutside(select, closeSelect)
</script>

<template>
  <CardToggleTemplate :open>
    <template #toggler>
      <button type="button" :class="button()" @click="open = !open">
        <slot name="placeholder" :label :placeholder />
        <ChevronUpIcon :class="[icon(), { 'rotate-180': open }]" />
      </button>
    </template>
    <template #toggled>
      <CardKit v-show="open" class="absolute flex flex-col gap-0.5 mt-1 z-50 w-full">
        <template v-for="{ label, value } in options">
          <slot name="option" :label :value :close-select />
        </template>
      </CardKit>
    </template>
  </CardToggleTemplate>
</template>
