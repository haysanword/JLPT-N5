import React from 'react';
import { PronunciationPhrase } from '../../../types';
import PronunciationModule from './PronunciationModule';

const PronunciationPractice: React.FC<{ phrases: PronunciationPhrase[] }> = ({ phrases }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-slate-800 border-t pt-6">Latihan Pengucapan</h3>
      <p className="text-slate-500 mb-4">Dengarkan, lalu ucapkan frasa di bawah ini dan dapatkan umpan balik dari AI!</p>
      <div className="space-y-4">
        {phrases.map((phrase, index) => (
          <PronunciationModule key={index} phrase={phrase} />
        ))}
      </div>
    </div>
  );
};

export default PronunciationPractice;