import React from 'react';

export const LockIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
    </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);

export const TrophyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M15.5 2.832a.75.75 0 0 0-1.5-.496l-2.5 7.516-1.34-1.34a.75.75 0 0 0-1.06 1.06l2.353 2.353a.75.75 0 0 0 1.252-.225L15.5 2.832ZM8.585 5.585a.75.75 0 0 0-1.06-1.06L5.353 6.694a.75.75 0 0 0 .177 1.252l2.354 2.353a.75.75 0 0 0 1.06-1.06L7.364 7.72l1.22-1.22-.001-.916Z" />
      <path d="M17.61 8.895a.75.75 0 0 1 1.06 0l.793.792a.75.75 0 0 1 0 1.06l-.792.792a.75.75 0 0 1-1.06 0l-.793-.792a.75.75 0 0 1 0-1.06l.792-.792Z" />
      <path d="m1.398 8.895 7.49 7.49a.75.75 0 0 1-1.06 1.06l-7.49-7.49a.75.75 0 0 1 1.06-1.06Z" />
      <path d="m11.99 1.399.792-.793a.75.75 0 0 1 1.06 0l.793.792a.75.75 0 0 1 0 1.06l-.792.793a.75.75 0 0 1-1.06 0l-.793-.792a.75.75 0 0 1 0-1.06Z" />
    </svg>
);

export const SendIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

export const SenseiIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M14.25 2.25a.75.75 0 0 0-1.5 0v1.01h-1.5V2.25a.75.75 0 0 0-1.5 0v1.01h-1.5V2.25a.75.75 0 0 0-1.5 0v1.01h-1.5a.75.75 0 0 0 0 1.5h1.5v1.51h-1.5a.75.75 0 0 0 0 1.5h1.5v1.51h-1.5a.75.75 0 0 0 0 1.5h1.5v1.51h-1.5a.75.75 0 0 0 0 1.5h1.5v1.51h-1.5a.75.75 0 0 0 0 1.5h1.5v1.01a.75.75 0 0 0 1.5 0v-1.01h1.5v1.01a.75.75 0 0 0 1.5 0v-1.01h1.5v1.01a.75.75 0 0 0 1.5 0v-1.01h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.51h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.51h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.51h1.5a.75.75 0 0 0 0-1.5h-1.5V2.25a.75.75 0 0 0-1.5 0v1.01h-1.5V2.25Z" />
        <path d="M4.125 7.5c-1.036 0-1.875.84-1.875 1.875v10.125c0 1.035.84 1.875 1.875 1.875h14.25c1.035 0 1.875-.84 1.875-1.875V9.375c0-1.036-.84-1.875-1.875-1.875h-3.191a.75.75 0 0 1 0-1.5h3.191a3.375 3.375 0 0 1 3.375 3.375v10.125a3.375 3.375 0 0 1-3.375 3.375H4.125a3.375 3.375 0 0 1-3.375-3.375V9.375a3.375 3.375 0 0 1 3.375-3.375h3.191a.75.75 0 1 1 0 1.5H4.125Z" />
    </svg>
);

export const SpeakerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.348 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.807 3.808 3.807 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
      <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
    </svg>
);

export const StopIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3-3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
    </svg>
);

export const SunIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.106a.75.75 0 0 1 0 1.06l-1.591 1.59a.75.75 0 1 1-1.06-1.061l1.59-1.59a.75.75 0 0 1 1.061 0ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75ZM17.803 17.803a.75.75 0 0 1-1.06 0l-1.59-1.591a.75.75 0 1 1 1.06-1.06l1.591 1.59a.75.75 0 0 1 0 1.061ZM12 18a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.803a.75.75 0 0 1 0-1.06l1.59-1.591a.75.75 0 1 1 1.06 1.06l-1.59 1.59a.75.75 0 0 1-1.061 0ZM6.106 7.166a.75.75 0 0 1 1.06 0l1.591 1.59a.75.75 0 0 1-1.06 1.061l-1.59-1.591a.75.75 0 0 1 0-1.06ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" />
    </svg>
);

export const MoonIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.981A10.503 10.503 0 0 1 12 22.5a10.5 10.5 0 0 1-10.5-10.5c0-4.307 2.56-8.005 6.3-9.664a.75.75 0 0 1 .819.162Z" clipRule="evenodd" />
    </svg>
);

export const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 .5.707c1.73.444 3.468.444 5.2 0a.75.75 0 0 0 .5-.707V8.65a2.25 2.25 0 0 1 2.25-2.25h.533a.75.75 0 0 0 0-1.5H12a.75.75 0 0 0-.75.75v11.19a.75.75 0 0 0 .5.707c1.73.444 3.468.444 5.2 0a.75.75 0 0 0 .5-.707V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533.75.75 0 0 0-1.5 0Z" />
    </svg>
);

export const RectangleStackIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M6 3.75A2.25 2.25 0 0 1 8.25 1.5h7.5a2.25 2.25 0 0 1 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 6 8.25v-4.5ZM8.25 3a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clipRule="evenodd" />
        <path d="M4.5 9.75A2.25 2.25 0 0 0 2.25 12v4.5A2.25 2.25 0 0 0 4.5 18.75h7.5A2.25 2.25 0 0 0 14.25 16.5v-4.5A2.25 2.25 0 0 0 12 9.75h-7.5ZM4.5 11.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-4.5Z" />
        <path d="M10.5 15.75A2.25 2.25 0 0 0 8.25 18v4.5A2.25 2.25 0 0 0 10.5 24.75h7.5A2.25 2.25 0 0 0 20.25 22.5v-4.5A2.25 2.25 0 0 0 18 15.75h-7.5ZM10.5 17.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-4.5Z" />
    </svg>
);

export const CertificateIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm12.133 5.857a.75.75 0 0 0-1.06-1.06l-1.59 1.59-1.59-1.59a.75.75 0 0 0-1.06 1.06l1.59 1.59-1.59 1.59a.75.75 0 1 0 1.06 1.06l1.59-1.59 1.59 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.59 1.59-1.59Z" clipRule="evenodd" />
    </svg>
);

export const PencilIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.885L17.5 5.5a2.121 2.121 0 0 0-3-3L3.58 13.42a4 4 0 0 0-.885 1.343Z" />
    </svg>
);

export const ChatIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.75 6.75 0 0 0 6.75-6.75v-2.506a5.25 5.25 0 0 1-1.936-1.037A.75.75 0 0 0 10.5 11.25H9a.75.75 0 0 0-.75.75v.252a6.712 6.712 0 0 0-.583 3.493.75.75 0 0 0 .733.755h.403a.75.75 0 0 0 .75-.75v-2.16c.387.21.804.368 1.249.461V18a5.25 5.25 0 0 1-5.25 5.25a5.216 5.216 0 0 1-1.33-.203a.75.75 0 0 0-.916.497Z" clipRule="evenodd" />
        <path d="M11.25 3.336a5.25 5.25 0 0 1 5.25 5.25v2.506c.387.21.804.368 1.249.461v-.217a.75.75 0 0 0-.75-.75h-.403a.75.75 0 0 0-.733.755c.044 1.223.363 2.38.916 3.406a.75.75 0 0 0 .916-.497c.102-.34.17-.69.202-1.05h.001a6.75 6.75 0 0 0 6.75-6.75A6.75 6.75 0 0 0 18 2.25a6.707 6.707 0 0 0-.246-.006A5.25 5.25 0 0 1 11.25 3.336Z" />
    </svg>
);

export const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

export const MicrophoneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
        <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.75 6.75 0 1 1-13.5 0v-1.5A.75.75 0 0 1 6 10.5Z" />
    </svg>
);

export const StopCircleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.25 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm7.5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>
);

export const ExclamationTriangleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
);

export const RefreshIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201-4.42 5.5 5.5 0 0 1 10.453 2.13.75.75 0 0 1-1.5.042a4 4 0 0 0-7.85-2.062 4 4 0 0 0 6.202 3.32.75.75 0 0 1 .536 1.344ZM2.75 6.5A.75.75 0 0 1 3.5 5.75h2.5a.75.75 0 0 1 0 1.5H4.25v2.5a.75.75 0 0 1-1.5 0v-2.5Zm13.5 9.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2.5a.75.75 0 0 1 1.5 0v2.5Z" clipRule="evenodd" />
    </svg>
);

export const ArrowPathIcon: React.FC<{className?: string}> = ({className}) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}> <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201-4.42 5.5 5.5 0 0 1 10.453 2.13.75.75 0 0 1-1.5.042a4 4 0 0 0-7.85-2.062 4 4 0 0 0 6.202 3.32.75.75 0 0 1 .536 1.344ZM2.75 6.5A.75.75 0 0 1 3.5 5.75h2.5a.75.75 0 0 1 0 1.5H4.25v2.5a.75.75 0 0 1-1.5 0v-2.5Zm13.5 9.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2.5a.75.75 0 0 1 1.5 0v2.5Z" clipRule="evenodd" /> </svg> );
export const CheckIcon: React.FC<{className?: string}> = ({className}) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}> <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" /> </svg> );
export const XMarkIcon: React.FC<{className?: string}> = ({className}) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /> </svg> );

export const PrintIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.135.74.34 1.057.6C16.92 8.44 17 9.214 17 10v5.25c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 15.25V10c0-.786.08-1.56.688-2.098.317-.26.68-.465 1.057-.6V2.75ZM6.5 2.5a.25.25 0 0 0-.25.25v3.504a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75V2.75a.25.25 0 0 0-.25-.25h-6.5Z" clipRule="evenodd" />
      <path d="M10 12.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75-.75Z" />
      <path d="M12.25 10.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z" />
      <path d="M10.75 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
      <path d="M9.25 10.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z" />
      <path d="M7.75 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
    </svg>
);