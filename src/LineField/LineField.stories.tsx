import type { Meta, StoryObj } from '@storybook/react';

import { LineField } from './LineField';

const meta = {
  title: 'Inputs/Line',
  component: LineField,
} satisfies Meta<typeof LineField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
