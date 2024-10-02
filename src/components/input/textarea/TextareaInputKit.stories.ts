import type { Meta, StoryObj } from '@storybook/vue3'
import TextareaInputKit from '@input/textarea/TextareaInputKit.vue'

const meta: Meta<typeof TextareaInputKit> = {
  title: 'Inputs/Textarea',
  component: TextareaInputKit as Record<keyof typeof TextareaInputKit, unknown>,
  tags: ['autodocs'],
  args: {
    modelValue: '',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextareaInputKit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}
