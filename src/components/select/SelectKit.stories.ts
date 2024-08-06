import type { Meta, StoryObj } from '@storybook/vue3'
import SelectKit from '@select/SelectKit.vue'

const meta: Meta<typeof SelectKit> = {
  title: 'Selects/Select simple',
  // component needs temporary type alias because of generic type being used. See: https://github.com/storybookjs/storybook/issues/24238
  component: SelectKit as Record<keyof typeof SelectKit, unknown>,
  tags: ['autodocs'],
  args: {
    modelValue: null,
    label: 'Fruit',
    placeholder: 'No fruit selected',
    options: [
      { label: 'Pineapple', value: 'pineapple' },
      { label: 'Watermelon', value: 'watermelon' },
    ],
  },
} satisfies Meta<typeof SelectKit>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: { size: 'large' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
