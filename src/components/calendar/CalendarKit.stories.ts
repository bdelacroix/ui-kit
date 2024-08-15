import type { Meta, StoryObj } from '@storybook/vue3'
import CalendarKit from '@calendar/CalendarKit.vue'
import { startOfTomorrow } from 'date-fns'

const meta: Meta<typeof CalendarKit> = {
  title: 'Calendar/Calendar',
  component: CalendarKit,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CalendarKit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: startOfTomorrow()
  },
}
