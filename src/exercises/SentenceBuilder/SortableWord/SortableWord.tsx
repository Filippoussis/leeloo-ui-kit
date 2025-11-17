import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { WordItem } from '../types';

export const SortableWord = ({ word }: { word: WordItem }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: word.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 200ms ease',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        px-4 py-3 rounded-lg border-2 font-medium text-lg cursor-grab
        transition-all duration-200
        bg-blue-50 border-blue-200 text-blue-800
        hover:bg-blue-100 hover:border-blue-300
        ${
          isDragging
            ? 'cursor-grabbing shadow-xl z-50 rotate-2 scale-105'
            : 'shadow-sm hover:shadow-md'
        }
        select-none
        touch-none
        shrink-0
      `}
    >
      {word.text}
    </div>
  );
};
