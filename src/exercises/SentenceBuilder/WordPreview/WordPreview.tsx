import type { WordItem } from '../types';

export const WordPreview = ({ word }: { word: WordItem }) => (
  <div className="px-4 py-3 rounded-lg border-2 font-medium text-lg bg-blue-100 border-blue-300 text-blue-800 shadow-xl rotate-2 scale-105">
    {word.text}
  </div>
);
