import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 w-fit max-w-full">
        
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Orange
        </button>

        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Purple
        </button>

        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition"
        >
          Pink
        </button>

      </div>
    </div>
  );
}

export default App;