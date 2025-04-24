import { useState, useRef } from 'react';

export default function VoiceChat() {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef  = useRef<Blob[]>([]);

  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL]     = useState<string | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    mediaRecorderRef.current = recorder;
    audioChunksRef.current = [];

    recorder.addEventListener('dataavailable', (e: BlobEvent) => {
      if (e.data.size > 0) {
        audioChunksRef.current.push(e.data);
      }
    });

    recorder.start();
    setIsRecording(true);
  };

    const stopRecording = () => {
    mediaRecorderRef.current!.addEventListener('stop', async () => {
      const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('audio', blob, 'speech.webm');

      const res = await fetch('http://localhost:3000/user/api/voice', {
        method: 'POST',
        body: formData,
      });

      const responseBlob = await res.blob();
      const url = URL.createObjectURL(responseBlob);
      setAudioURL(url);
      new Audio(url).play();
    });

    mediaRecorderRef.current!.stop();
    setIsRecording(false);
  };

  return (
    <div>
    
      <button onClick={startRecording} disabled={isRecording}>
        <div className="border-2 cursor-pointer border-white px-8 py-4 rounded-full font-medium flex items-center gap-2">Start Recording</div>
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        <div className="border-2 cursor-pointer border-white px-8 py-4 rounded-full font-medium flex items-center gap-2">Stop Recording</div>
      </button>

      {audioURL && (
        <audio src={audioURL} controls style={{ marginTop: 16 }} />
      )}
    </div>
  );
}
