import React from "react";

// Define a type for the props
interface GameProps {
  setPage: (page: "menu" | "game") => void;
}

// Correctly type the component props
const KeyInput: React.FC<GameProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col gap-5 h-screen bg-gray-600 z-50 w-full justify-center items-center">
        <h1 className="w-1/2">Welcome to first beta test of doge clicker remastered!<br />If you notice any bugs please lmk asap.<br />Thank you for participating! :D</h1>
      <button onClick={() => setPage("game")}>Play</button>
    </div>
  );
};

export default KeyInput;
