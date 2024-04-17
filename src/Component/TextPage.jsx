
export const TextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">What do you want to learn today?</h1>
      <input className="border border-gray-300 rounded-lg px-4 py-2 w-80 mb-4" type="text" placeholder="Enter your text..." />
      <button className="rounded-full px-4 py-2 bg-green-500 text-white">Submit</button>
    </div>
  );
};