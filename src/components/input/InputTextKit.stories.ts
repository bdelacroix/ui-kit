import type { Meta, StoryObj } from '@storybook/vue3'
import InputTextKit from '@input/InputTextKit.vue'

const meta: Meta<typeof InputTextKit> = {
  title: 'Input/Input text',
  component: InputTextKit as Record<keyof typeof InputTextKit, unknown>,
  tags: ['autodocs'],
  args: {
    modelValue: '',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof InputTextKit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
