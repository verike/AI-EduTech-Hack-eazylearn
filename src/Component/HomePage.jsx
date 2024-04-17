import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-400 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Prompt Method</h1>
        <div className="flex space-x-4">
          <button className="rounded-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"><Link to ='/speech'>Speech</Link></button> 
          <button className="rounded-full px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400 transition duration-300"><Link to ='/text'>Text</Link></button>
        </div>
      </div>
    );
  };
  