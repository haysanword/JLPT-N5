import React, { useState } from 'react';

// Context
import { UserProvider, useUser } from './contexts/UserContext';

// Views
import Board from './components/views/Board';
import LessonView from './components/views/LessonView';
import FlashcardView from './components/views/FlashcardView';
import CertificatePage from './components/views/CertificatePage';
import CertificateGallery from './components/views/CertificateGallery';
import WelcomeScreen from './components/views/WelcomeScreen';

// Layout
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

// Features
import ChatFab from './components/features/chat/ChatFab';
import ProfileEditModal from './components/features/profile/ProfileEditModal';

// Data
import { LESSONS } from './lessons';

// Types
import { Lesson } from './types';

type MainView = 'board' | 'flashcards' | 'certificates' | 'certificate';

const AppContent: React.FC = () => {
  const { isAuthenticated, userProgress, completeLesson } = useUser();
  
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentView, setCurrentView] = useState<MainView>('board');
  const [previousView, setPreviousView] = useState<MainView>('board');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [certificateLevel, setCertificateLevel] = useState<'N5' | 'N4' | 'N3' | null>(null);

  const handleSelectLesson = (lesson: Lesson) => setSelectedLesson(lesson);
  const handleCloseLesson = () => setSelectedLesson(null);

  const handleCompleteLessonWithClose = (xp: number) => {
    if (selectedLesson) {
      completeLesson(selectedLesson.id, xp);
    }
    setSelectedLesson(null);
  };

  const handleNavigate = (view: 'board' | 'flashcards' | 'certificates') => {
      setSelectedLesson(null);
      setCertificateLevel(null);
      setCurrentView(view);
  };
  
  const handleGenerateCertificate = (level: 'N5' | 'N4' | 'N3') => {
      if (currentView !== 'certificate') {
        setPreviousView(currentView);
      }
      setCertificateLevel(level);
      setCurrentView('certificate');
  };

  const handleBackFromCertificate = () => {
    setCurrentView(previousView);
    setCertificateLevel(null);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'certificate':
        if (certificateLevel) {
          return <CertificatePage level={certificateLevel} onBack={handleBackFromCertificate} />;
        }
        setCurrentView('board');
        return null;

      case 'certificates':
        return <CertificateGallery onSelectCertificate={handleGenerateCertificate} />;

      case 'flashcards':
        return <FlashcardView />;
      
      case 'board':
      default:
        if (selectedLesson) {
          return (
            <LessonView
              lesson={selectedLesson}
              onClose={handleCloseLesson}
              onComplete={handleCompleteLessonWithClose}
            />
          );
        }
        return (
          <Board 
            lessons={LESSONS} 
            onSelectLesson={handleSelectLesson} 
            completedLessons={userProgress.completedLessons}
            onGenerateCertificate={handleGenerateCertificate}
          />
        );
    }
  };
  
  if (!isAuthenticated) {
    return <WelcomeScreen />;
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-0">
          
          <div className="lg:col-span-3">
             <Sidebar 
                onEditProfile={() => setIsProfileModalOpen(true)}
                currentView={currentView}
                onNavigate={handleNavigate}
             />
          </div>
          
          <div className="lg:col-span-9">
            {renderMainContent()}
          </div>

        </div>
      </main>
      <ChatFab />

      <ProfileEditModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default App;
