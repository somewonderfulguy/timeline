import type { Meta, StoryObj } from '@storybook/react';

import Timeline from './Timeline';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  tags: ['autodocs']
};

export default meta;

export const Default: Story = {};

type Story = StoryObj<typeof meta>;
