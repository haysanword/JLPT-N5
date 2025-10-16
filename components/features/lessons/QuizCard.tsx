import React, { useState } from 'react';
import { QuizQuestion } from '../../../types';

interface QuizCardProps {
  question: QuizQuestion;
  onComplete: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onComplete, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);
  };

  const getButtonClass = (option: string) => {
    if (!answered) {
      return 'bg-white hover:bg-slate-100 border-slate-300';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }
    if (option === selectedOption) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-slate-50 border-slate-200 text-slate-500';
  };

  return (
    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-6 transition-all duration-300">
       <p className="text-sm font-semibold text-slate-500 mb-2">
        Soal {questionNumber} dari {totalQuestions}
      </p>
      <h4 className="font-semibold text-lg text-slate-800 mb-4">{question.question}</h4>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={answered}
            className={`w-full text-left p-4 rounded-lg border-2 transition-colors text-slate-700 font-medium ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
       {answered && (
        <div className="mt-6 text-center">
            {selectedOption === question.correctAnswer ? (
                 <p className="font-semibold text-green-700 mb-3">Benar! Kerja bagus.</p>
            ) : (
                <div className="text-center mb-3">
                    <p className="font-semibold text-red-700">Kurang tepat!</p>
                    <p className="text-sm text-slate-600">Jawaban yang benar: {question.correctAnswer}</p>
                </div>
            )}
         
          <button 
            onClick={() => onComplete(selectedOption === question.correctAnswer)}
            className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            {questionNumber < totalQuestions ? 'Soal Berikutnya' : 'Selesaikan Kuis'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCard;