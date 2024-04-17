import { useState } from "react";
import axios from 'axios';
import { useAuthContext } from "../Context/authContext";
import { useToast } from 'react-toast-notifications';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const SpeechPage = () => {
  const { token } = useAuthContext();
  const toast = useToast();
  const [response, setResponse] = useState(null);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  const handleSend = async () => {
    try {
      const response = await axios.post(`https://ai-edutech-hack-server.onrender.com/api/v1/ai/prompt`,
        { question: transcript },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Question was successfully submitted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setResponse(response.data.chat);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setResponse(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">What do you want to learn today</h1>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={SpeechRecognition.startListening}>Click button to speak</button>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="rounded-full px-4 py-2 bg-blue-500 text-white mb-4 w-[200px]" onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <button className="rounded-full px-4 py-2 bg-green-500 text-white" onClick={handleSend}>Send</button>
      {response && (
        <div className="mt-8 bg-white p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{response.role}</h2>
          <p>{response.chat}</p>
        </div>
      )}
    </div>
  );
};