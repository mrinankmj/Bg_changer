import { useState } from "react";

function App() {
  const [color, setcolor] = useState("Lavenderblush");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="sticky flex flex-wrap justify-center bottom-12 isnet-x-0 px-2">
        <div className="relative flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setcolor("Yellow")}
            className=" outline-none px-4 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
          onClick={() => setcolor("red")}
            className=" outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setcolor("Green")}
            className=" outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setcolor("Lavender")}
            className=" outline-none px-4 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
          onClick={() => setcolor("Black")}
            className=" outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
          onClick={() => setcolor("white")}
            className=" outline-none px-4 rounded-full shadow-lg text-black
            "
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
          onClick={() => setcolor("Purple")}
            className=" outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
          onClick={() => setcolor("pink")}
            className=" outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
