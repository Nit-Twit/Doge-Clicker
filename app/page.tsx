
// pages/index.tsx
import { useState, useEffect } from "react";
import KeyInput from "@/components/apiCheck";
import Game from "@/components/game";
import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  return (
      <div className="flex flex-row h-full w-full">
        {session ? <Game></Game> : <KeyInput></KeyInput>}
      </div>
  );
}
