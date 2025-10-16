import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { ChatIcon, CloseIcon } from './Icons';

const ChatFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`fixed bottom-6 right-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors"
          aria-label="Open AI Tutor"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed bottom-6 right-6 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{width: 'min(90vw, 400px)'}}>
        <div className="relative">
          <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 bg-white text-slate-600 w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-slate-100 transition-colors z-10"
              aria-label="Close AI Tutor"
            >
              <CloseIcon className="w-5 h-5" />
          </button>
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default ChatFab;