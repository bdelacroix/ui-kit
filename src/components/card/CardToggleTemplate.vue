<script setup lang="ts">
import TransitionKit from '@/components/transition/TransitionKit.vue'
import { TransitionName } from '@/components/transition/types/TransitionName.enum'
import { onClickOutside } from '@vueuse/core'
import { tv } from 'tailwind-variants'
import { computed, toRefs, useTemplateRef } from 'vue'

interface Props {
  open: boolean
  alignment?: 'start' | 'center' | 'end'
}

const props = withDefaults(defineProps<Props>(), {
  alignment: 'start',
})
const { open, alignment } = toRefs(props)

type Emits = {
  close: []
}

const emits = defineEmits<Emits>()

const toggler = useTemplateRef<HTMLElement | null>('toggler')

const toggleVariants = computed(() =>
  tv({
    variants: {
      alignment: {
        start: 'me-auto',
        center: 'mx-auto',
        end: 'ms-auto',
      },
    },
  })
)

onClickOutside(toggler, () => emits('close'))
</script>

<template>
  <div class="relative flex flex-col gap-2" ref="toggler">
    <slot name="toggler"></slot>
    <TransitionKit :name="TransitionName.SLIDE_FADE_VERTICAL">
      <div v-if="open" :class="toggleVariants({ alignment })">
        <slot name="toggled"></slot>
      </div>
    </TransitionKit>
  </div>
</template>
