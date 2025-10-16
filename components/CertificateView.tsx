import React, { useState, useEffect } from 'react';
import { getCertificateMessage } from '../services/geminiService';

interface CertificatePageProps {
  level: 'N5' | 'N4' | 'N3';
  userName: string;
  onBack: () => void;
}

const PrintIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.135.74.34 1.057.6C16.92 8.44 17 9.214 17 10v5.25c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 15.25V10c0-.786.08-1.56.688-2.098.317-.26.68-.465 1.057-.6V2.75ZM6.5 2.5a.25.25 0 0 0-.25.25v3.504a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75V2.75a.25.25 0 0 0-.25-.25h-6.5Z" clipRule="evenodd" />
      <path d="M10 12.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75-.75Z" />
      <path d="M12.25 10.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z" />
      <path d="M10.75 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
      <path d="M9.25 10.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z" />
      <path d="M7.75 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
    </svg>
);

const CertificatePage: React.FC<CertificatePageProps> = ({ level, userName, onBack }) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMessage = async () => {
            setIsLoading(true);
            const msg = await getCertificateMessage(userName, level);
            setMessage(msg);
            setIsLoading(false);
        };
        fetchMessage();
    }, [userName, level]);

    const completionDate = new Date().toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
    
    return (
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 print:shadow-none print:border-none print:p-0">
            <style>{`
                @media print {
                    body > * { visibility: hidden; }
                    .certificate-print-area, .certificate-print-area * { visibility: visible; }
                    .certificate-print-area {
                        position: absolute; left: 0; top: 0; width: 100%; height: 100%;
                        margin: 0; padding: 2rem; border: 8px solid #b91c1c !important;
                        background-color: white !important;
                    }
                    .certificate-print-area h1, .certificate-print-area p, .certificate-print-area span {
                        color: #1e293b !important;
                    }
                    .certificate-print-area .text-red-800 {
                        color: #991b1b !important;
                    }
                }
            `}</style>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 print:hidden">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Halaman Sertifikat</h2>
                <div className="flex gap-2 mt-2 sm:mt-0">
                     <button onClick={onBack} className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                        Saya Sudah Selesai
                    </button>
                    <button onClick={() => window.print()} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors">
                        <PrintIcon className="w-5 h-5" />
                        Cetak
                    </button>
                </div>
            </div>

            <div className="certificate-print-area bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 w-full max-w-none mx-auto aspect-[1.414/1] rounded-lg shadow-inner p-8 sm:p-12 border-8 border-red-700 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-red-200 dark:border-red-800 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-red-200 dark:border-red-800 rounded-br-lg"></div>
                
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 z-10">
                    <span className="text-white font-bold text-3xl">JQ</span>
                </div>

                <h1 className="text-xl font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 z-10">Sertifikat Penyelesaian</h1>
                <p className="text-4xl sm:text-5xl font-bold text-red-800 dark:text-red-300 mt-6 z-10" style={{fontFamily: 'serif'}}>{userName}</p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl z-10">Telah berhasil menyelesaikan semua pelajaran dan kuis untuk</p>
                <p className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-100 mt-2 z-10">Level {level} JLPT</p>
                
                <div className="my-6 border-t border-slate-300 dark:border-slate-600 w-1/2 z-10"></div>
                
                {isLoading ? (
                    <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse z-10"></div>
                ) : (
                    <p className="text-md text-slate-500 dark:text-slate-400 italic max-w-xl z-10">"{message}"</p>
                )}
                
                <div className="mt-auto flex justify-between w-full items-end z-10">
                    <div className="text-left">
                        <p className="text-lg font-bold" style={{fontFamily: "serif"}}>Gemini-Sensei</p>
                        <p className="text-sm border-t border-slate-400 dark:border-slate-500">Tutor AI Anda</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">{completionDate}</p>
                        <p className="text-sm border-t border-slate-400 dark:border-slate-500">Tanggal Penyelesaian</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatePage;
