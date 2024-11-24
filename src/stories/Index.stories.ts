import type { Meta, StoryObj } from '@storybook/react';

import Lottie from '../index';

const meta = {
  title: 'Lottie',
  component: Lottie,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Lottie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    path: "/sample-lottie.json",
    width: 500,
    height: 500,
  },
};