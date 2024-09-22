import type { Meta, StoryObj } from '@storybook/vue3'
import TextInputKit from '@input/TextInputKit.vue'

const meta: Meta<typeof TextInputKit> = {
  title: 'Inputs/Text',
  component: TextInputKit as Record<keyof typeof TextInputKit, unknown>,
  tags: ['autodocs'],
  args: {
    modelValue: '',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextInputKit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
