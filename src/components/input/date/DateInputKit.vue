<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { CalendarDaysIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import type { InputProps } from '@input/types/InputProps'
import InputTemplate from '@input/InputTemplate.vue'
import CalendarKit from '@calendar/CalendarKit.vue'
import CardToggleTemplate from '@card/CardToggleTemplate.vue'
import { format } from 'date-fns'
import TransitionKit from '@transition/TransitionKit.vue'

const props = withDefaults(defineProps<InputProps>(), { placeholder: 'jj/mm/yyyy' })
const { id, name, disabled, placeholder } = toRefs(props)

const model = defineModel<Date | null>({ default: null })
const formattedModel = computed<string | null>(() =>
  model.value ? format(model.value, 'dd-MM-yyyy') : null
)

function updateDate(event: Event): void {
  const inputDateElement: HTMLInputElement | null = event.target as HTMLInputElement | null

  if (!inputDateElement) {
    return
  }

  model.value = new Date(inputDateElement.value)
}

const isCalendarOpen = ref<boolean>(false)

function toggleCalendar(): void {
  if (disabled.value) {
    return
  }

  isCalendarOpen.value = !isCalendarOpen.value
}
</script>

<template>
  <CardToggleTemplate
    :class="{ 'pointer-events-none': disabled }"
    :open="isCalendarOpen"
    @close="isCalendarOpen = false"
  >
    <template #toggler>
      <InputTemplate @click="toggleCalendar">
        <template #default="{ inputClass }">
          <input
            type="text"
            :id
            :name
            :disabled
            :placeholder
            readonly
            :class="[inputClass, 'cursor-pointer']"
            pattern="\d{2}-\d{2}-\d{4}"
            :value="formattedModel"
            @change="updateDate"
          />
        </template>
        <template #rightIcon="{ iconClass }">
          <TransitionKit>
            <XCircleIcon
              v-show="null !== model"
              @click.stop.prevent="model = null"
              class="self-center size-4 cursor-pointer me-4"
            />
          </TransitionKit>
          <CalendarDaysIcon :class="iconClass" />
        </template>
      </InputTemplate>
    </template>
    <template #toggled>
      <CalendarKit v-model="model" />
    </template>
  </CardToggleTemplate>
  <div></div>
</template>
