import type { Meta, StoryObj } from '@storybook/vue3'
import DateInputKit from '@input/DateInputKit.vue'

const meta: Meta<typeof DateInputKit> = {
  title: 'Inputs/Date',
  component: DateInputKit as Record<keyof typeof DateInputKit, unknown>,
  tags: ['autodocs'],
  args: {
    modelValue: null,
  },
} satisfies Meta<typeof DateInputKit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
