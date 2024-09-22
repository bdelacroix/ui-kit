<script setup lang="ts">
import type { InputProps } from '@input/types/InputProps'
import InputTemplate from '@input/InputTemplate.vue'
import { toRefs } from 'vue'

const props = defineProps<InputProps>()
const { id, name, disabled, placeholder } = toRefs(props)

const model = defineModel<string>()
</script>

<template>
  <InputTemplate :disabled>
    <template #default="{ inputClass }">
      <input type="text" v-model="model" :id :name :disabled :placeholder :class="inputClass" />
    </template>
  </InputTemplate>
</template>
