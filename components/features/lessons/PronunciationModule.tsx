import React, { useState, useRef, useEffect } from 'react';
import { PronunciationPhrase } from '../../../types';
import { getPronunciationFeedback } from '../../../services/geminiService';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  MicrophoneIcon,
  SpeakerIcon,
  StopCircleIcon,
} from '../../common/Icons';

type RecordingStatus = 'idle' | 'recording' | 'loading' | 'finished';

interface Feedback {
  rating: 'Sempurna' | 'Bagus' | 'Coba Lagi' | 'Error';
  message: string;
}

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

interface PronunciationModuleProps {
  phrase: PronunciationPhrase;
  isCompact?: boolean;
}

const getFeedbackStyles = (fb: Feedback | null) => {
  if (!fb) return { container: '', icon: '' };
  switch (fb.rating) {
    case 'Sempurna':
      return {
        container: 'bg-green-50 border-green-200 text-green-800',
        icon: 'text-green-500',
      };
    case 'Bagus':
      return {
        container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        icon: 'text-yellow-500',
      };
    case 'Coba Lagi':
      return {
        container: 'bg-red-50 border-red-200 text-red-800',
        icon: 'text-red-500',
      };
    default:
      return {
        container: 'bg-slate-100 border-slate-200 text-slate-800',
        icon: 'text-slate-500',
      };
  }
};

const PronunciationModule: React.FC<PronunciationModuleProps> = ({
  phrase,
  isCompact = false,
}) => {
  const [status, setStatus] = useState<RecordingStatus>('idle');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isListening, setIsListening] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setFeedback(null);
    setStatus('idle');
    const synth = window.speechSynthesis;
    return () => {
      if (synth.speaking) synth.cancel();
    };
  }, [phrase]);

  const handleListen = () => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
      setIsListening(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(phrase.japanese);
    utterance.lang = 'ja-JP';
    utterance.onstart = () => setIsListening(true);
    utterance.onend = () => setIsListening(false);
    utterance.onerror = () => setIsListening(false);
    synth.speak(utterance);
  };

  const startRecording = async () => {
    setFeedback(null);
    setStatus('recording');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/webm',
        });
        const audioBase64 = await blobToBase64(audioBlob);
        setStatus('loading');

        const responseText = await getPronunciationFeedback(
          audioBase64,
          phrase.japanese
        );

        let rating: Feedback['rating'] = 'Coba Lagi';
        let message = responseText;

        if (responseText.startsWith('[Sempurna]')) {
          rating = 'Sempurna';
          message = responseText.replace('[Sempurna] ', '');
        } else if (responseText.startsWith('[Bagus]')) {
          rating = 'Bagus';
          message = responseText.replace('[Bagus] ', '');
        } else if (responseText.startsWith('[Coba Lagi]')) {
          rating = 'Coba Lagi';
          message = responseText.replace('[Coba Lagi] ', '');
        } else if (responseText.startsWith('[Error]')) {
          rating = 'Error';
          message = responseText.replace('[Error] ', '');
        }

        setFeedback({ rating, message });
        setStatus('finished');
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
    } catch (err) {
      console.error('Error accessing microphone:', err);
      setStatus('idle');
      setFeedback({
        rating: 'Error',
        message: 'Tidak dapat mengakses mikrofon. Pastikan izin telah diberikan.',
      });
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === 'recording'
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  // ✅ Hindari TS2339 dengan memisahkan render feedback
  const renderFeedback = () =>
    feedback && (
      <div
        className={`mt-3 p-2.5 rounded-lg border flex items-start gap-2.5 ${getFeedbackStyles(feedback).container}`}
      >
        <div
          className={`shrink-0 w-5 h-5 mt-0.5 ${getFeedbackStyles(feedback).icon}`}
        >
          {feedback.rating === 'Sempurna' ? (
            <CheckCircleIcon />
          ) : (
            <ExclamationTriangleIcon />
          )}
        </div>
        <div>
          <p className="font-semibold text-xs">{feedback.rating}</p>
          <p className="text-xs">{feedback.message}</p>
        </div>
      </div>
    );

  if (isCompact) {
    return (
      <div className="bg-white p-3 rounded-lg border border-slate-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={handleListen}
              className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-colors bg-blue-100 text-blue-600 hover:bg-blue-200 ${
                isListening ? 'animate-pulse' : ''
              }`}
              aria-label="Dengarkan"
            >
              <SpeakerIcon className="w-5 h-5" />
            </button>
            <div>
              <p className="font-semibold text-slate-800 text-sm">
                Latih Pengucapan
              </p>
            </div>
          </div>
          <button
            onClick={status === 'recording' ? stopRecording : startRecording}
            disabled={status === 'loading'}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 shrink-0 ml-2 bg-red-100 text-red-600 hover:bg-red-200"
            aria-label={status === 'recording' ? 'Hentikan' : 'Rekam'}
          >
            {status === 'idle' && <MicrophoneIcon className="w-5 h-5" />}
            {status === 'recording' && (
              <StopCircleIcon className="w-5 h-5 animate-pulse" />
            )}
            {status === 'loading' && (
              <div className="w-5 h-5 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
            )}
            {status === 'finished' && <MicrophoneIcon className="w-5 h-5" />}
          </button>
        </div>
        {renderFeedback()}
      </div>
    );
  }

  return (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={handleListen}
            className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors
                        bg-blue-100 text-blue-600
                        hover:bg-blue-200 ${isListening ? 'animate-pulse' : ''}`}
            aria-label="Dengarkan frasa"
          >
            <SpeakerIcon className="w-5 h-5" />
          </button>
          <div>
            <p className="text-xl font-semibold text-slate-800">
              {phrase.japanese}
            </p>
            <p className="text-sm text-slate-500">{phrase.romaji}</p>
          </div>
        </div>
        <button
          onClick={status === 'recording' ? stopRecording : startRecording}
          disabled={status === 'loading'}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 flex-shrink-0 ml-2
                    bg-red-100 text-red-600 
                    hover:bg-red-200"
          aria-label={
            status === 'recording' ? 'Hentikan rekaman' : 'Mulai rekaman'
          }
        >
          {status === 'idle' && <MicrophoneIcon className="w-6 h-6" />}
          {status === 'recording' && (
            <StopCircleIcon className="w-6 h-6 animate-pulse" />
          )}
          {status === 'loading' && (
            <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
          )}
          {status === 'finished' && <MicrophoneIcon className="w-6 h-6" />}
        </button>
      </div>
      {renderFeedback()}
    </div>
  );
};

export default PronunciationModule;
