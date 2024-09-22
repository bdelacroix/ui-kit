<script setup lang="ts">
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import { CardKit } from '@card'
import { computed, ref } from 'vue'
import ButtonOutlineKit from '@button/ButtonOutlineKit.vue'
import CalendarButton from '@calendar/CalendarButton.vue'

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const today = ref<Date>(startOfToday())
const model = defineModel<Date | null>({ default: null })
const currentMonth = ref<string>(format(model.value || today.value, 'MMMM yyyy'))
const firstDayOfMonth = computed<Date>(() => parse(currentMonth.value, 'MMMM yyyy', new Date()))
const lastDayOfMonth = computed<Date>(() => endOfMonth(firstDayOfMonth.value))
const daysInMonth = computed<Date[]>(() =>
  eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth.value, { weekStartsOn: 1 }),
    end: endOfWeek(lastDayOfMonth.value, { weekStartsOn: 1 }),
  })
)

const previousMonth = computed(() => {
  const firstDayOfPreviousMonth = add(firstDayOfMonth.value, { months: -1 })
  return format(firstDayOfPreviousMonth, 'MMMM yyyy')
})

const nextMonth = computed(() => {
  const firstDayOfNextMonth = add(firstDayOfMonth.value, { months: +1 })
  return format(firstDayOfNextMonth, 'MMMM yyyy')
})

const colStartClasses = [
  'col-start-7',
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
]
</script>
<template>
  <CardKit class="w-fit flex flex-col gap-4 p-4 overflow">
    <div class="flex items-center justify-between">
      <ButtonOutlineKit
        shape="icon"
        @click="currentMonth = previousMonth"
        class="bg-transparent shadow-lg shadow-neutral-100"
      >
        <ChevronLeftIcon />
      </ButtonOutlineKit>
      <p>{{ currentMonth }}</p>
      <ButtonOutlineKit
        shape="icon"
        @click="currentMonth = nextMonth"
        class="bg-transparent shadow-lg shadow-neutral-100"
      >
        <ChevronRightIcon />
      </ButtonOutlineKit>
    </div>
    <div class="grid grid-cols-7 gap-2 place-items-center">
      <p v-for="(day, key) of daysOfWeek" :key>
        {{ day }}
      </p>
    </div>
    <div class="grid grid-cols-7 gap-2 place-items-center">
      <CalendarButton
        v-for="(day, key) in daysInMonth"
        @click="model = day"
        :key
        :today="isToday(day)"
        :same-month="isSameMonth(day, firstDayOfMonth)"
        :active="model ? isSameDay(day, model) : false"
        :class="colStartClasses[getDay(day)]"
      >
        {{ format(day, 'd') }}
      </CalendarButton>
    </div>
  </CardKit>
</template>
