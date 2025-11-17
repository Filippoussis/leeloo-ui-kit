import { default as React } from 'react';
import { WordItem } from './types';
type SentenceBuilderProps = {
    initialWords: WordItem[];
    correctSentence: string;
    onComplete?: (isCorrect: boolean) => void;
};
export declare const SentenceBuilder: React.FC<SentenceBuilderProps>;
export {};
//# sourceMappingURL=SentenceBuilder.d.ts.map