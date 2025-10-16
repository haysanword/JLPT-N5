import React from 'react';
import { Lesson } from '../../../types';
import { LockIcon, CheckCircleIcon } from '../../common/Icons';

interface BoardTileProps {
  lesson: Lesson;
  unlocked: boolean;
  completed: boolean;
  onClick: () => void;
}

const BoardTile: React.FC<BoardTileProps> = ({ lesson, unlocked, completed, onClick }) => {
  const baseClasses = "bg-white p-4 rounded-xl border transition-all duration-200 group relative";
  const unlockedClasses = "border-gray-200 hover:border-red-500 hover:shadow-lg cursor-pointer";
  const lockedClasses = "bg-gray-50 border-gray-200 cursor-not-allowed";
  const completedClasses = "border-green-500 ring-1 ring-green-500";

  return (
    <div
      onClick={unlocked ? onClick : undefined}
      className={`${baseClasses} ${unlocked ? (completed ? completedClasses : unlockedClasses) : lockedClasses}`}
      aria-disabled={!unlocked}
    >
        {completed && (
            <div className="absolute top-3 right-3 text-green-500">
                <CheckCircleIcon className="w-5 h-5"/>
            </div>
        )}
        {!unlocked && !completed && (
            <div className="absolute top-3 right-3 text-gray-400">
                <LockIcon className="w-5 h-5"/>
            </div>
        )}
      <div className={`flex flex-col h-full ${!unlocked ? 'opacity-60' : ''}`}>
        <h3 className="font-bold text-gray-800 text-base leading-tight pr-6">{lesson.title}</h3>
        <p className="text-xs text-gray-500 mt-1 flex-grow">{lesson.level} &bull; {lesson.description}</p>
        <div className="mt-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                XP {lesson.xp}
            </span>
        </div>
      </div>
    </div>
  );
};

export default BoardTile;