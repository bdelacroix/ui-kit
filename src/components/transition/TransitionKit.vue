<script setup lang="ts">
import { TransitionName } from '@transition/types/TransitionName.enum'
import { toRefs } from 'vue'

interface Props {
  name?: TransitionName
}

const props = withDefaults(defineProps<Props>(), { name: TransitionName.FADE })
const { name } = toRefs(props)
</script>

<template>
  <Transition :name>
    <slot></slot>
  </Transition>
</template>

<style scoped lang="css">
/* TransitionName.FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* TransitionName.SLIDE_FADE */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* TransitionName.SLIDE_FADE_VERTICAL */
.slide-fade-vertical-enter-active,
.slide-fade-vertical-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-vertical-enter-from,
.slide-fade-vertical-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
