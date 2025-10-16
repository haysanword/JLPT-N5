import React from 'react';
import { useUser } from '../../contexts/UserContext';
import Avatar from '../common/Avatar';
import { BookOpenIcon, RectangleStackIcon, CertificateIcon, PencilIcon } from '../common/Icons';

interface SidebarProps {
  onEditProfile: () => void;
  onReset?: () => void; // Made optional as it will come from context
  currentView: 'board' | 'flashcards' | 'certificates' | 'certificate';
  onNavigate: (view: 'board' | 'flashcards' | 'certificates') => void;
}

const navButtonBase = "w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-lg transition-colors text-sm font-semibold";
const navButtonActive = "bg-red-500 text-white";
const navButtonInactive = "text-slate-600 hover:bg-slate-100";

const Sidebar: React.FC<SidebarProps> = ({ onEditProfile, onNavigate, currentView }) => {
  const { userProgress, userProfile, isAdmin, resetProgress } = useUser();

  const xpForNextLevel = userProgress.level * 250;
  const currentLevelXp = (userProgress.level - 1) * 250;
  const xpInCurrentLevel = userProgress.xp - currentLevelXp;
  const progressPercentage = Math.min((xpInCurrentLevel / 250) * 100, 100);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 sticky top-24 space-y-6">
      <div>
        <div className="flex items-center gap-4">
            <Avatar avatarId={userProfile.avatar} className="w-12 h-12" />
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-800">{userProfile.name}</h3>
                    {isAdmin && <span className="px-2 py-0.5 bg-purple-200 text-purple-700 text-xs font-bold rounded-full">ADMIN</span>}
                    <button onClick={onEditProfile} className="text-slate-400 hover:text-slate-600" aria-label="Edit Profile">
                        <PencilIcon className="w-4 h-4"/>
                    </button>
                </div>
                <p className="text-sm text-slate-500">Petualang • Pemula JLPT N5</p>
            </div>
        </div>
      </div>

       <div className="border-t border-slate-200 pt-6 space-y-2">
            <button onClick={() => onNavigate('board')} className={`${navButtonBase} ${currentView === 'board' ? navButtonActive : navButtonInactive}`}>
                <BookOpenIcon className="w-5 h-5" />
                Papan Pelajaran
            </button>
            <button onClick={() => onNavigate('flashcards')} className={`${navButtonBase} ${currentView === 'flashcards' ? navButtonActive : navButtonInactive}`}>
                <RectangleStackIcon className="w-5 h-5" />
                Kartu Kosakata
            </button>
             <button onClick={() => onNavigate('certificates')} className={`${navButtonBase} ${currentView === 'certificates' || currentView === 'certificate' ? navButtonActive : navButtonInactive}`}>
                <CertificateIcon className="w-5 h-5" />
                Sertifikat Saya
            </button>
      </div>
      
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Progres Level</h3>
        <div className="flex justify-between items-end mb-2">
            <span className="font-black text-red-600 text-3xl leading-none" style={{ fontFamily: 'sans-serif' }}>{userProgress.level}</span>
            <span className="text-sm font-semibold text-slate-500 tabular-nums">{userProgress.xp} / {xpForNextLevel} XP</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner overflow-hidden">
            <div
                className="bg-gradient-to-r from-red-500 to-orange-400 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
        <p className="text-xs text-center text-slate-500 mt-2 font-medium">
            {progressPercentage >= 100 ? 
                '🎉 Level Up! Selamat!' : 
                `${xpForNextLevel - userProgress.xp} XP lagi untuk naik level.`}
        </p>
      </div>

       <div className="border-t border-slate-200 pt-6">
        <button
            onClick={resetProgress}
            className="w-full text-center py-2 px-4 bg-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-300 transition-colors text-sm"
        >
            Atur Ulang Progres
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
