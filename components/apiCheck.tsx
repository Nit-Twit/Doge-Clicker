// components/KeyInput.tsx
"use client"

import { signIn } from "next-auth/react";
import React from "react";

interface GameProps {
  setPage: (page: "menu" | "game") => void;
}

const KeyInput = () => {


  return (
    <div className="flex flex-col gap-5 h-screen bg-gray-600 z-50 w-full justify-center items-center">
      <h1 className="w-1/2">
        Welcome to the first alpha test of Doge Clicker Remastered!<br />
        If you notice any bugs, please let me know ASAP.<br />
        Thank you for participating! :D<br /><br />
        P.S. This build wasn't fully finished feature wise, so don't be surprised if you find a bug ;)
      </h1>
      <button onClick={() => {
        signIn("discord");
      }}>Click here to play</button>
    </div>
  );
};

export default KeyInput;
