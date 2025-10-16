import React from 'react';

// A collection of simple SVG avatars
const avatars: { [key: string]: React.FC<{className?: string}> } = {
  default: ({className}) => ( <div className={`w-full h-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xl ${className}`}> A </div> ),
  ninja: ({className}) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm4 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-2 4.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" opacity=".3"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 16c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6zm-3.5-7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg> ),
  cat: ({className}) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.43 12.35c-1.28 1.48-3.05 2.52-5.07 2.52s-3.79-1.04-5.07-2.52c-.22-.25-.23-.64-.02-.89.2-.25.56-.27.79-.04 1.03 1.18 2.45 1.93 4.04 1.93s3.01-.75 4.04-1.93c.23-.23.59-.21.79.04.21.25.2.64-.02.89zM10 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> ),
  fox: ({className}) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M4.22 18.28c.53.53 1.2.82 1.92.82h11.72c.72 0 1.39-.29 1.92-.82.53-.53.79-1.18.79-1.85V9.43c0-.67-.26-1.32-.79-1.85-.53-.53-1.2-.82-1.92-.82H6.14c-.72 0-1.39.29-1.92.82C3.69 8.1 3.43 8.76 3.43 9.43v7c0 .67.26 1.32.79 1.85zM12 2L2 12h3v8h14v-8h3L12 2z"/></svg> ),
  samurai: ({className}) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09L17.5 10 11 16.5z"/></svg> ),
};
export const avatarIds = Object.keys(avatars);

interface AvatarProps {
  avatarId: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarId, className = 'w-12 h-12' }) => {
  const AvatarComponent = avatars[avatarId] || avatars.default;
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      <AvatarComponent className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;