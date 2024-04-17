import { useState } from "react";

export const SpeechPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const recognition = new window.SpeechRecognition();

  recognition.onstart = () => {
    setIsListening(true);
    setTranscript('');
  };

  recognition.onresult = (event) => {
    setTranscript(event.results[0][0].transcript);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  const handleStartListening = () => {
    recognition.start();
  };

  const handleStopListening = () => {
    recognition.stop();
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Speech Interaction Page</h1>
      {/* <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4">Click to Speak</button> */}
      
      <button
        onClick={handleStartListening}
        onMouseDown={handleStartListening}
        onMouseUp={handleStopListening}
        onTouchStart={handleStartListening}
        onTouchEnd={handleStopListening}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isListening ? 'opacity-50 cursor-wait' : ''}`}
      >
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p>{transcript}</p>

      
      {/* Loader state - Placeholder for loader */}
      <div className="loader bg-gray-300 w-20 h-20 mb-4"></div>
      <p className="text-gray-700 mb-4">Picking up sound wave...</p>
      <textarea className="border border-gray-300 rounded-lg px-4 py-2 w-80 h-40 mb-4" placeholder="Speech converted to text..." readOnly></textarea>
      <button className="rounded-full px-4 py-2 bg-green-500 text-white">Prompt</button>
      <p className="text-gray-700 mt-4">This application is to help interact with visual and audio impairment using OpenAI.</p>
    </div>
   </div>
  );
};

