import React from 'react';
import { Lesson } from '../../types';
import BoardTile from '../features/lessons/BoardTile';
import { TrophyIcon } from '../common/Icons';

interface BoardProps {
  lessons: Lesson[];
  completedLessons: string[];
  onSelectLesson: (lesson: Lesson) => void;
  onGenerateCertificate: (level: 'N5' | 'N4' | 'N3') => void;
}

const Board: React.FC<BoardProps> = ({ lessons, completedLessons, onSelectLesson, onGenerateCertificate }) => {
  const levels: ('N5' | 'N4' | 'N3')[] = ['N5', 'N4', 'N3'];

  return (
    <div className="space-y-8">
      {levels.map(level => {
        const lessonsInLevel = lessons.filter(l => l.level === level);
        const completedInLevel = lessonsInLevel.filter(l => completedLessons.includes(l.id));
        const isLevelComplete = lessonsInLevel.length > 0 && lessonsInLevel.length === completedInLevel.length;

        return (
          <div key={level}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 px-4 sm:px-0 border-b pb-2">
              Level {level}
            </h2>
            {isLevelComplete && (
                <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <TrophyIcon className="w-6 h-6"/>
                        </div>
                        <div>
                            <h3 className="font-bold text-green-800">Selamat! Level Selesai!</h3>
                            <p className="text-sm text-green-700">Anda telah menguasai semua pelajaran di level {level}.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => onGenerateCertificate(level)}
                        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto flex-shrink-0"
                    >
                        Buat Sertifikat
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessonsInLevel.map((lesson, index) => {
                  const isUnlocked = index === 0 || completedLessons.includes(lessonsInLevel[index - 1].id);
                  return (
                      <BoardTile
                        key={lesson.id}
                        lesson={lesson}
                        unlocked={isUnlocked}
                        completed={completedLessons.includes(lesson.id)}
                        onClick={() => onSelectLesson(lesson)}
                      />
                  );
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Board;