export interface WordItem {
  id: string;
  text: string;
  correctOrder: number;
}

export interface DragDropSentenceProps {
  words: WordItem[];
  correctSentence: string;
  onComplete?: (isCorrect: boolean) => void;
}
