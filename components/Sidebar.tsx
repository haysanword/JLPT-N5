import React from 'react';
import { UserProgress, UserProfile } from '../types';
import Avatar from './Avatar';
import { BookOpenIcon, RectangleStackIcon, CertificateIcon, PencilIcon } from './Icons';

interface SidebarProps {
  userProgress: UserProgress;
  userProfile: UserProfile;
  isAdmin: boolean;
  onEditProfile: () => void;
  onReset: () => void;
  currentView: 'board' | 'flashcards' | 'certificates' | 'certificate';
  onNavigate: (view: 'board' | 'flashcards' | 'certificates') => void;
}

const navButtonBase = "w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-lg transition-colors text-sm font-semibold";
const navButtonActive = "bg-red-500 text-white";
const navButtonInactive = "text-slate-600 hover:bg-slate-100";

const Sidebar: React.FC<SidebarProps> = ({ userProgress, userProfile, isAdmin, onEditProfile, onReset, currentView, onNavigate }) => {
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
         <h3 className="text-lg font-bold text-gray-800 mb-2">Progres</h3>
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-bold text-gray-700">Level {userProgress.level}</span>
          <span className="text-sm font-semibold text-red-600">{userProgress.xp} XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-red-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-right text-gray-500 mt-1">{xpForNextLevel > userProgress.xp ? `${xpForNextLevel - userProgress.xp} XP ke level berikutnya` : 'Level Up!'}</p>
      </div>

       <div className="border-t border-slate-200 pt-6">
        <button
            onClick={onReset}
            className="w-full text-center py-2 px-4 bg-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-300 transition-colors text-sm"
        >
            Atur Ulang Progres
        </button>
      </div>

    </div>
  );
};

export default Sidebar;