<script setup lang="ts">
import type { InputProps } from '@input/types/InputProps'
import InputTemplate from '@input/InputTemplate.vue'

interface Props extends InputProps {
  rows?: number
  cols?: number
}

const { id, name, disabled, placeholder, rows, cols } = defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <InputTemplate :disabled>
    <template #default="{ inputClass }">
      <textarea v-model="model" :class="inputClass" :id :name :disabled :placeholder :rows :cols />
    </template>
  </InputTemplate>
</template>
