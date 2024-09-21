<script setup lang="ts">
import InputTemplate from '@input/InputTemplate.vue'
import { toRefs } from 'vue'

interface Props {
  placeholder?: string
  disabled?: boolean
}

const props = defineProps<Props>()
const { placeholder } = toRefs(props)

const model = defineModel<string>()
</script>

<template>
  <InputTemplate :disabled>
    <template #default="{ inputClass }">
      <input type="text" v-model="model" :placeholder :disabled :class="inputClass" />
    </template>
  </InputTemplate>
</template>
