import React, { useState, useEffect } from 'react';
import { getCertificateMessage } from '../../services/geminiService';
import { useUser } from '../../contexts/UserContext';
import { PrintIcon } from '../common/Icons';

interface CertificatePageProps {
  level: 'N5' | 'N4' | 'N3';
  onBack: () => void;
}

const HankoStamp: React.FC = () => (
    <div className="w-20 h-20 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="transparent" stroke="#B91C1C" strokeWidth="4" />
            <text x="50" y="58" fontFamily="serif" fontSize="40" fill="#B91C1C" textAnchor="middle" fontWeight="bold">
                認定
            </text>
        </svg>
    </div>
);


const CertificatePage: React.FC<CertificatePageProps> = ({ level, onBack }) => {
    const { userProfile } = useUser();
    const { name: userName } = userProfile;
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
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 print:shadow-none print:border-none print:p-0">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&family=Playfair+Display:wght@700&display=swap');
                
                @media print {
                    body > * { visibility: hidden; }
                    .certificate-print-area, .certificate-print-area * { visibility: visible; }
                    .certificate-print-area {
                        position: absolute; left: 0; top: 0; width: 100%; height: 100%;
                        margin: 0; padding: 2rem !important; 
                        background-color: #f8fafc !important; /* bg-slate-50 */
                    }
                    .certificate-print-area .text-slate-800 { color: #1e293b !important; }
                    .certificate-print-area .text-slate-600 { color: #475569 !important; }
                    .certificate-print-area .text-slate-500 { color: #64748b !important; }
                    .certificate-print-area .text-slate-400 { color: #94a3b8 !important; }
                    .certificate-print-area .text-red-600 { color: #dc2626 !important; }
                    .certificate-print-area .bg-red-600 { background-color: #dc2626 !important; }
                    .certificate-print-area .border-slate-300 { border-color: #cbd5e1 !important; }
                    .certificate-print-area .hanko-stamp { opacity: 0.8 !important; }
                    .print-bg-pattern {
                        opacity: 0.05 !important;
                    }
                }

                .font-title { font-family: 'Playfair Display', serif; }
                .font-jp-serif { font-family: 'Noto Serif JP', serif; }
            `}</style>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 print:hidden">
                <h2 className="text-2xl font-bold text-slate-800">Pratinjau Sertifikat</h2>
                <div className="flex gap-2 mt-2 sm:mt-0">
                     <button onClick={onBack} className="bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                        Kembali
                    </button>
                    <button onClick={() => window.print()} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors">
                        <PrintIcon className="w-5 h-5" />
                        Cetak
                    </button>
                </div>
            </div>

            <div 
                className="certificate-print-area bg-slate-50 text-slate-800 w-full max-w-none mx-auto aspect-[1.414/1] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between"
            >
                {/* Background Elements */}
                <div className="print-bg-pattern absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-red-600/10 rounded-full z-0"></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/5 rounded-full z-0"></div>
                
                {/* Main Content */}
                <div className="relative z-10 text-left">
                    <h1 className="text-5xl font-bold font-title text-slate-800">Certificate <span className="text-red-600">of</span> Completion</h1>
                    <p className="text-xl font-jp-serif text-slate-500 mt-1">修了証明書</p>
                </div>

                <div className="relative z-10 text-left my-auto">
                    <p className="text-slate-600 text-lg">Sertifikat ini diberikan kepada</p>
                    <p className="text-7xl font-title text-red-600 my-2">
                        {userName}
                    </p>
                    <p className="text-slate-600 text-lg max-w-xl">
                        atas keberhasilannya menyelesaikan kurikulum <br/>
                        <span className="font-bold text-2xl text-slate-800">Japanese Language Proficiency Test — Level {level}</span>
                    </p>
                    {isLoading ? (
                        <div className="h-5 w-3/4 bg-slate-200 rounded animate-pulse my-4"></div>
                    ) : (
                        <p className="text-md text-slate-500 italic mt-4 max-w-xl">"{message}"</p>
                    )}
                </div>
                
                <div className="relative z-10 flex justify-between items-end">
                    <div className="text-left">
                        <p className="text-xl font-title">Gemini-Sensei</p>
                        <p className="text-sm border-t border-slate-300 text-slate-500 mt-1 pt-1">AI Language Tutor</p>
                    </div>

                    <div className="absolute bottom-0 right-16 hanko-stamp opacity-80">
                         <HankoStamp />
                    </div>

                    <div className="text-right">
                        <p className="text-xl font-semibold">{completionDate}</p>
                        <p className="text-sm border-t border-slate-300 text-slate-500 mt-1 pt-1">Tanggal Penyelesaian</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatePage;
