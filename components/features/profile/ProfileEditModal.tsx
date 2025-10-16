import React, { useState, useEffect } from 'react';
import { useUser } from '../../../contexts/UserContext';
import Avatar, { avatarIds } from '../../common/Avatar';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ isOpen, onClose }) => {
  const { userProfile, updateProfile } = useUser();
  const [name, setName] = useState(userProfile.name);
  const [selectedAvatar, setSelectedAvatar] = useState(userProfile.avatar);

  useEffect(() => {
    if (isOpen) {
      setName(userProfile.name);
      setSelectedAvatar(userProfile.avatar);
    }
  }, [isOpen, userProfile]);

  if (!isOpen) return null;

  const handleSave = () => {
    updateProfile({ name: name.trim() || 'Anata', avatar: selectedAvatar });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Edit Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Nama</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-slate-300 p-2 rounded-lg bg-slate-100 text-slate-900"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Pilih Avatar</label>
            <div className="flex flex-wrap gap-3">
              {avatarIds.map(id => (
                <button
                  key={id}
                  onClick={() => setSelectedAvatar(id)}
                  className={`rounded-full transition-all duration-200 ${selectedAvatar === id ? 'ring-2 ring-offset-2 ring-red-500' : ''}`}
                >
                  <Avatar avatarId={id} className="w-16 h-16" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="py-2 px-4 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300">Batal</button>
          <button onClick={handleSave} className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
