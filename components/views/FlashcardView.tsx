import React, { useState, useMemo, useEffect } from 'react';
import { LESSONS } from '../../lessons';
import { VocabularyItemWithLevel } from '../../types';
import Flashcard from '../features/flashcards/Flashcard';
import { RefreshIcon } from '../common/Icons';

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const useVocabulary = () => {
    return useMemo(() => {
        const vocabMap = new Map<string, VocabularyItemWithLevel>();
        LESSONS.forEach(lesson => {
            if (lesson.vocabulary) {
                lesson.vocabulary.forEach(item => {
                    if (!vocabMap.has(item.japanese)) {
                        vocabMap.set(item.japanese, {
                            ...item,
                            level: lesson.level,
                        });
                    }
                });
            }
        });
        return Array.from(vocabMap.values());
    }, []);
};

const FlashcardView: React.FC = () => {
    const allVocabulary = useVocabulary();
    const [levelFilter, setLevelFilter] = useState<'All' | 'N5' | 'N4' | 'N3'>('All');
    
    const [activeDeck, setActiveDeck] = useState<VocabularyItemWithLevel[]>([]);
    const [completedCount, setCompletedCount] = useState(0);
    const [totalInSession, setTotalInSession] = useState(0);

    const filteredVocabulary = useMemo(() => {
        return levelFilter === 'All'
            ? allVocabulary
            : allVocabulary.filter(item => item.level === levelFilter);
    }, [allVocabulary, levelFilter]);

    const startSession = () => {
        const newDeck = shuffleArray(filteredVocabulary);
        setActiveDeck(newDeck);
        setCompletedCount(0);
        setTotalInSession(newDeck.length);
    };

    useEffect(() => {
        startSession();
    }, [levelFilter, allVocabulary]);

    const handleFilterChange = (level: 'All' | 'N5' | 'N4' | 'N3') => {
        setLevelFilter(level);
    };

    const handleAnswer = (remembered: boolean) => {
        if (activeDeck.length === 0) return;
        const currentCard = activeDeck[0];
        const remainingDeck = activeDeck.slice(1);

        if (remembered) {
            setCompletedCount(prev => prev + 1);
            setActiveDeck(remainingDeck);
        } else {
            const newIndex = Math.min(remainingDeck.length, Math.floor(Math.random() * 3) + 3);
            remainingDeck.splice(newIndex, 0, currentCard);
            setActiveDeck(remainingDeck);
        }
    };

    const currentWord = activeDeck.length > 0 ? activeDeck[0] : null;
    const sessionFinished = totalInSession > 0 && activeDeck.length === 0;

    const levels: ('All' | 'N5' | 'N4' | 'N3')[] = ['All', 'N5', 'N4', 'N3'];

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 min-h-[600px] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Kartu Kosakata</h2>
                    <p className="text-slate-500 mt-1">Latih kosakata dengan sistem pengulangan.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                        <button key={level} onClick={() => handleFilterChange(level)}
                            className={`px-3 py-1.5 rounded-md font-semibold text-xs transition-colors ${levelFilter === level ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                            {level}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="my-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
                         style={{ width: `${totalInSession > 0 ? (completedCount / totalInSession) * 100 : 0}%` }}>
                    </div>
                </div>
                <p className="text-sm text-right text-slate-500 mt-1">Selesai: {completedCount} / {totalInSession}</p>
            </div>

            <div className="flex-grow flex items-center justify-center">
                {currentWord && <Flashcard key={currentWord.japanese} word={currentWord} onAnswer={handleAnswer} />}
                
                {sessionFinished && (
                    <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-green-600">Luar Biasa!</h3>
                        <p className="text-slate-600 mt-2">Anda telah menyelesaikan semua kartu di sesi ini.</p>
                        <button 
                            onClick={startSession}
                            className="mt-6 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
                        >
                            <RefreshIcon className="w-5 h-5" />
                            Mulai Ulang Sesi
                        </button>
                    </div>
                )}

                {!currentWord && !sessionFinished && (
                     <div className="text-center py-10">
                        <p className="text-slate-500">Tidak ada kosakata yang ditemukan untuk level ini.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlashcardView;