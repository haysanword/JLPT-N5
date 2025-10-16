import React, { useState, useRef, useEffect } from 'react';
import { getTutorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { SendIcon, SenseiIcon } from './Icons';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', content: "Konnichiwa! Saya Gemini-Sensei. Ada yang bisa saya bantu dengan pelajaran bahasa Jepang Anda hari ini?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
        const responseText = await getTutorResponse(input, messages.slice(1)); // Exclude initial greeting from history
        const aiMessage: ChatMessage = { role: 'ai', content: responseText };
        setMessages(prev => [...prev, aiMessage]);
    } catch(error) {
        console.error(error);
        const errorMessage: ChatMessage = { role: 'ai', content: "Maaf, Sensei sedang istirahat sejenak. Coba lagi nanti ya." };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col h-[550px] max-h-[80vh]">
      <div className="flex-shrink-0 flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <SenseiIcon className="w-6 h-6 text-white"/>
            </div>
            <div>
                <h2 className="font-semibold text-slate-800">Gemini-Sensei</h2>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs text-slate-500">Online</p>
                </div>
            </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto px-2 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <SenseiIcon className="w-5 h-5 text-white"/>
                  </div>
              )}
              <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
              </div>
          </div>
        ))}

        {loading && (
            <div className="flex items-end gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <SenseiIcon className="w-5 h-5 text-white"/>
                </div>
                <div className="max-w-xs lg:max-w-md p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-none shadow-sm">
                    <div className="flex items-center space-x-1.5">
                        <span className="text-sm text-slate-500">Sensei is typing</span>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex-shrink-0 flex gap-2 pt-3 mt-1 border-t border-slate-200">
        <input
          className="flex-grow border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition bg-slate-100 text-slate-900 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tanya Sensei..."
          disabled={loading}
          aria-label="Chat input"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center flex-shrink-0"
          aria-label="Send message"
        >
          <SendIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;