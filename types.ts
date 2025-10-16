export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface PronunciationPhrase {
  japanese: string;
  romaji: string;
}

export interface VocabularyItem {
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface VocabularyItemWithLevel extends VocabularyItem {
    level: 'N5' | 'N4' | 'N3';
    example?: {
        japanese: string;
        romaji: string;
        indonesian: string;
    };
}

export interface Lesson {
  id: string;
  level: 'N5' | 'N4' | 'N3';
  title: string;
  description: string;
  xp: number;
  content: string;
  audioScript: string;
  quiz: QuizQuestion[];
  pronunciationPhrases?: PronunciationPhrase[];
  vocabulary?: VocabularyItem[];
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  completedLessons: string[];
}

export interface UserProfile {
  name: string;
  avatar: string;
}
