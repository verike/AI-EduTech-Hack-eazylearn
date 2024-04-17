import { useState } from "react";
import 'regenerator-runtime/runtime';
  

//     <div>
//       <div >
//
//       {/* <button >Click to Speak</button> */}
//       {/* Loader state - Placeholder for loader */}
//       <div className="loader bg-gray-300 w-20 h-20 mb-4"></div>
//       <p className="text-gray-700 mb-4">Picking up sound wave...</p>
//       
//       <button className="rounded-full px-4 py-2 bg-green-500 text-white">Prompt</button>
//       <p className="text-gray-700 mt-4">This application is to help interact with visual and audio impairment using OpenAI.</p>
//     </div>
//    </div>

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const SpeechPage = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">What do you want to learn today</h1>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={SpeechRecognition.startListening}>Click button to speak</button>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={resetTranscript}>Reset</button>
      {/* <textarea className="border border-gray-300 rounded-lg px-4 py-2 w-80 h-40 mb-4" placeholder="Speech converted to text..." readOnly>{transcript}</textarea> */}
      <p>{transcript}</p>
      <button className="rounded-full px-4 py-2 bg-green-500 text-white">Send</button>
    </div>
  );
};

