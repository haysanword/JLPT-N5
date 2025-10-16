import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import Avatar, { avatarIds } from '../common/Avatar';

const WelcomeScreen: React.FC = () => {
  const { login } = useUser();
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('default');
  const [password, setPassword] = useState('');

  const handleStart = () => {
    const isAdminLogin = password.trim().toLowerCase() === 'admin';
    login({ name: name.trim() || 'Anata', avatar: selectedAvatar }, isAdminLogin);
  };

  const isButtonDisabled = !(
    password.trim().toLowerCase() === 'admin' || 
    (name.trim() !== '' && password.trim() !== '')
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-3xl">JQ</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Selamat Datang!</h1>
        <p className="text-slate-500 mt-2">Buat profil Anda untuk memulai petualangan belajar bahasa Jepang.</p>
        
        <div className="space-y-6 mt-8 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Nama Tampilan</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-slate-300 p-3 rounded-lg bg-slate-100 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Masukkan nama Anda..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Pilih Avatar</label>
            <div className="flex flex-wrap gap-3 justify-center">
              {avatarIds.map(id => (
                <button
                  key={id}
                  onClick={() => setSelectedAvatar(id)}
                  className={`rounded-full transition-all duration-200 ${selectedAvatar === id ? 'ring-2 ring-offset-2 ring-red-500' : 'ring-2 ring-transparent'}`}
                >
                  <Avatar avatarId={id} className="w-16 h-16" />
                </button>
              ))}
            </div>
          </div>
          
           <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">Kata Sandi</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-slate-300 p-3 rounded-lg bg-slate-100 text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Masukkan kata sandi..."
            />
          </div>

        </div>

        <button 
            onClick={handleStart} 
            disabled={isButtonDisabled}
            className="mt-8 w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400 disabled:cursor-not-allowed"
        >
          Mulai Belajar
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
