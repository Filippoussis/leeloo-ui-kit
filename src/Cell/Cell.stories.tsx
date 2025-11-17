import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from './Cell';

const meta = {
  title: 'Crossword/Cell',
  component: Cell,
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
