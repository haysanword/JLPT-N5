import React from 'react';
import { Lesson } from '../types';
import { CertificateIcon, LockIcon } from './Icons';

interface CertificateGalleryProps {
  lessons: Lesson[];
  completedLessons: string[];
  onSelectCertificate: (level: 'N5' | 'N4' | 'N3') => void;
}

interface CertificateCardProps {
    level: 'N5' | 'N4' | 'N3';
    isComplete: boolean;
    lessonsInLevel: number;
    completedInLevel: number;
    onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ level, isComplete, lessonsInLevel, completedInLevel, onClick }) => {
    const baseClasses = "border-2 rounded-xl p-6 transition-all duration-300 flex flex-col items-center justify-center text-center";
    const unlockedClasses = "bg-white border-red-200 hover:border-red-500 hover:shadow-lg cursor-pointer transform hover:-translate-y-1";
    const lockedClasses = "bg-slate-100 border-slate-200 opacity-70";
    
    return (
        <div 
            onClick={isComplete ? onClick : undefined}
            className={`${baseClasses} ${isComplete ? unlockedClasses : lockedClasses}`}
            aria-disabled={!isComplete}
        >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isComplete ? 'bg-red-500 text-white' : 'bg-slate-300 text-slate-500'}`}>
                {isComplete ? <CertificateIcon className="w-8 h-8" /> : <LockIcon className="w-8 h-8" />}
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Sertifikat Level {level}</h3>
            {isComplete ? (
                 <p className="text-green-600 text-sm font-semibold mt-2">Tersedia untuk dicetak!</p>
            ) : (
                <>
                    <p className="text-slate-500 text-sm mt-2">Selesaikan semua pelajaran di level ini untuk membuka.</p>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-4">
                        <div 
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(completedInLevel / lessonsInLevel) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{completedInLevel} / {lessonsInLevel} pelajaran selesai</p>
                </>
            )}
        </div>
    );
};

const CertificateGallery: React.FC<CertificateGalleryProps> = ({ lessons, completedLessons, onSelectCertificate }) => {
    const levels: ('N5' | 'N4' | 'N3')[] = ['N5', 'N4', 'N3'];

    const checkLevelCompletion = (level: 'N5' | 'N4' | 'N3') => {
        const lessonsInLevel = lessons.filter(l => l.level === level);
        if (lessonsInLevel.length === 0) return { isComplete: false, completedCount: 0, total: 0 };

        const completedInLevel = lessonsInLevel.filter(l => completedLessons.includes(l.id));
        return {
            isComplete: lessonsInLevel.length === completedInLevel.length,
            completedCount: completedInLevel.length,
            total: lessonsInLevel.length
        };
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800">Galeri Sertifikat</h2>
            <p className="text-slate-500 mt-1 mb-6">Lihat dan cetak sertifikat untuk level yang telah Anda selesaikan.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {levels.map(level => {
                    const { isComplete, completedCount, total } = checkLevelCompletion(level);
                    return (
                        <CertificateCard 
                            key={level}
                            level={level}
                            isComplete={isComplete}
                            lessonsInLevel={total}
                            completedInLevel={completedCount}
                            onClick={() => onSelectCertificate(level)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CertificateGallery;