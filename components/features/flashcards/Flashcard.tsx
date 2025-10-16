import React, { useState, useEffect } from 'react';
import { VocabularyItemWithLevel } from '../../../types';
import { getExampleSentence } from '../../../services/geminiService';
import PronunciationModule from '../lessons/PronunciationModule';
import { ArrowPathIcon, CheckIcon, XMarkIcon } from '../../common/Icons';

interface FlashcardProps {
    word: VocabularyItemWithLevel;
    onAnswer: (remembered: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, onAnswer }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [example, setExample] = useState<VocabularyItemWithLevel['example'] | null>(word.example);
    const [isLoadingExample, setIsLoadingExample] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
        setExample(word.example);
        setIsLoadingExample(false);
    }, [word]);

    const handleFlip = async () => {
        if (isFlipped) return; // Prevent flipping from back to front by clicking
        
        if (!example) {
            setIsLoadingExample(true);
            const generatedExample = await getExampleSentence(word);
            setExample(generatedExample);
            setIsLoadingExample(false);
        }
        setIsFlipped(true);
    };

    const handleSelfAssessment = (remembered: boolean) => {
        setTimeout(() => onAnswer(remembered), 200);
    }
    
    const CardContainerClasses = "w-full h-full bg-slate-50 rounded-xl border-2 border-slate-200 p-6 flex flex-col transition-all duration-300";

    return (
        <div className="w-full max-w-lg min-h-[480px]">
            {!isFlipped ? (
                // FRONT FACE
                <div 
                    className={`${CardContainerClasses} cursor-pointer hover:border-red-400 hover:shadow-lg`} 
                    onClick={handleFlip}
                >
                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                         <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full self-start">
                            {word.level}
                        </span>
                        <div className="flex-grow flex items-center justify-center">
                            <h2 className="text-5xl font-bold text-slate-800">{word.indonesian}</h2>
                        </div>
                    </div>
                    <div className="text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                        <ArrowPathIcon className="w-4 h-4" />
                        Klik untuk membalik
                    </div>
                </div>
            ) : (
                // BACK FACE
                <div className={CardContainerClasses}>
                    <div className="flex-grow space-y-4">
                        <h3 className="text-5xl font-bold text-slate-800">{word.japanese}</h3>
                        <p className="text-2xl text-slate-500">{word.romaji}</p>
                        
                        <div className="border-t pt-4">
                            <h4 className="font-semibold text-slate-600 text-sm mb-2">Contoh Kalimat</h4>
                            {isLoadingExample && <div className="h-12 bg-slate-200 rounded animate-pulse"></div>}
                            {example && (
                                <div className="space-y-1 text-sm">
                                    <p className="font-semibold text-slate-700">{example.japanese} <span className="font-normal text-slate-500">({example.romaji})</span></p>
                                    <p className="text-slate-500 italic">"{example.indonesian}"</p>
                                </div>
                            )}
                            {!isLoadingExample && !example && <p className="text-xs text-slate-400">Tidak dapat memuat contoh.</p>}
                        </div>
                         <div className="pt-2">
                            <PronunciationModule phrase={{japanese: word.japanese, romaji: word.romaji}} isCompact />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button onClick={() => handleSelfAssessment(false)} className="w-full bg-red-100 text-red-700 hover:bg-red-200 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <XMarkIcon className="w-6 h-6"/> Lupa
                        </button>
                        <button onClick={() => handleSelfAssessment(true)} className="w-full bg-green-100 text-green-700 hover:bg-green-200 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <CheckIcon className="w-6 h-6"/> Ingat
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Flashcard;