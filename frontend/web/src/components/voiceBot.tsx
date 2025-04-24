import { useState, useRef } from 'react';

export default function VoiceChat() {
  // 1️⃣ Properly typed refs:
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef  = useRef<Blob[]>([]);

  // 2️⃣ Properly typed state:
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL]     = useState<string | null>(null);

  // Start capturing audio
  const startRecording = async () => {
    // Get mic stream (secure context required) :contentReference[oaicite:6]{index=6}
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // Create recorder :contentReference[oaicite:7]{index=7}
    const recorder = new MediaRecorder(stream);

    // Store it in the ref
    mediaRecorderRef.current = recorder;
    // Reset chunks
    audioChunksRef.current = [];

    // Collect data blobs
    recorder.addEventListener('dataavailable', (e: BlobEvent) => {
      if (e.data.size > 0) {
        audioChunksRef.current.push(e.data);
      }
    });

    // Begin recording
    recorder.start();
    setIsRecording(true);
  };

  // Stop recording and send to backend
  const stopRecording = () => {
    // Listen for stop event
    mediaRecorderRef.current!.addEventListener('stop', async () => {
      // Combine chunks into one Blob
      const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('audio', blob, 'speech.webm');

      // Send to backend
      const res = await fetch('http://localhost:3000/user/api/voice', {
        method: 'POST',
        body: formData,
      });

      // Read MP3 response as Blob
      const responseBlob = await res.blob();
      // Create object URL for playback
      const url = URL.createObjectURL(responseBlob);
      setAudioURL(url);
      new Audio(url).play();
    });

    // Stop recording
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
