import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { WordItem } from './types';
import { WordPreview } from './WordPreview';
import { SortableWord } from './SortableWord';

export const SentenceBuilder: React.FC<{
  initialWords: WordItem[];
  correctSentence: string;
  onComplete?: (isCorrect: boolean) => void;
}> = ({ initialWords, correctSentence, onComplete }) => {
  const [words, setWords] = useState<WordItem[]>(initialWords);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over) return;

    const activeIndex = words.findIndex((word) => word.id === active.id);
    const overIndex = words.findIndex((word) => word.id === over.id);

    if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
      setWords((prev) => arrayMove(prev, activeIndex, overIndex));
    }
  };

  // Проверка правильности
  const checkSentence = () => {
    const userSentence = words.map((word) => word.text).join(' ');
    const isCorrect = userSentence === correctSentence;

    onComplete?.(isCorrect);

    if (isCorrect) {
      alert('Правильно! 🎉');
    } else {
      alert('Попробуйте еще раз!');
    }
  };

  const resetExercise = () => {
    setWords([...initialWords].sort(() => Math.random() - 0.5));
  };

  const showAnswer = () => {
    setWords([...initialWords].sort((a, b) => a.correctOrder - b.correctOrder));
  };

  const activeWord = activeId
    ? words.find((word) => word.id === activeId)
    : null;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Составьте предложение в правильном порядке
        </h2>

        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="p-8 bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl border-2 border-gray-200 shadow-sm">
            <SortableContext
              items={words.map((w) => w.id)}
              strategy={horizontalListSortingStrategy}
            >
              <div className="flex flex-wrap gap-4 justify-center items-center min-h-[100px]">
                {words.map((word) => (
                  <SortableWord key={word.id} word={word} />
                ))}
              </div>
            </SortableContext>
          </div>

          <DragOverlay>
            {activeWord ? <WordPreview word={activeWord} /> : null}
          </DragOverlay>
        </DndContext>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={checkSentence}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
        >
          Проверить
        </button>
        <button
          onClick={resetExercise}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors shadow-sm"
        >
          Сбросить
        </button>
        <button
          onClick={showAnswer}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm"
        >
          Показать ответ
        </button>
      </div>

      <div className="text-center text-gray-600 text-sm">
        💡 Перетаскивайте слова чтобы составить предложение в правильном порядке
      </div>
    </div>
  );
};
