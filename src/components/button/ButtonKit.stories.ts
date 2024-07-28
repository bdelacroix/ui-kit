import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonKit from '@/components/button/ButtonKit.vue'

const meta: Meta<typeof ButtonKit> = {
  title: 'Buttons/Default',
  component: ButtonKit,
  tags: ['autodocs'],
  args: {
    type: 'button',
    color: 'primary',
  },
  parameters: {
    slots: {
      default: {
        description: 'Button content',
        template: 'Default',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: { size: 'large' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const Icon: Story = {
  args: { size: 'icon' },
  parameters: {
    slots: {
      default: {
        template:
          '<svg dataSlot="icon" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" strokeLinecap="round" strokeLinejoin="round" /></svg>',
      },
    },
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}
