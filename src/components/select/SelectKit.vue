<script setup lang="ts" generic="T">
import { computed, ref, toRefs } from 'vue'
import SelectItem from '@select/SelectItem.vue'
import type { SelectProps } from '@select/types/SelectProps'
import SelectTemplate from '@select/SelectTemplate.vue'
import type { SelectOption } from '@select/types/SelectOption'

const props = withDefaults(defineProps<SelectProps<T>>(), {
  size: 'large',
  disabled: false,
})
const { options, label, placeholder, size, disabled } = toRefs(props)

const modelValue = defineModel<T | null>()

const activeOption = computed<SelectOption<T> | undefined>(() =>
  options.value.find((option) => option.value === modelValue.value)
)

const isOpen = ref(true)

function toggleItem(value: T): void {
  modelValue.value = value !== modelValue.value ? value : null

  isOpen.value = false
}
</script>

<template>
  <SelectTemplate :options :label :placeholder :size :disabled>
    <template #placeholder="{ label, placeholder }">
      <div>
        <span>{{ label }} : </span>
        <span class="font-light">{{ activeOption?.label || placeholder }}</span>
      </div>
    </template>
    <template #option="{ label, value, closeSelect }">
      <SelectItem @click="toggleItem(value), closeSelect()" :active="value === modelValue">
        {{ label }}
      </SelectItem>
    </template>
  </SelectTemplate>
</template>
