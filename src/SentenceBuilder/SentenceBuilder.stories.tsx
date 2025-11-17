import type { Meta, StoryObj } from '@storybook/react';
import { SentenceBuilder } from './SentenceBuilder';
import type { WordItem } from './types';

const meta = {
  title: 'Exercises/SentenceBuilder',
  component: SentenceBuilder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SentenceBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleWords: WordItem[] = [
  { id: '1', text: 'I', correctOrder: 0 },
  { id: '2', text: 'like', correctOrder: 1 },
  { id: '3', text: 'to', correctOrder: 2 },
  { id: '4', text: 'learn', correctOrder: 3 },
  { id: '5', text: 'English', correctOrder: 4 },
];

export const Default: Story = {
  args: {
    initialWords: [...sampleWords].sort(() => Math.random() - 0.5),
    correctSentence: 'I like to learn English',
  },
};
