"use client";

import KeyInput from "@/components/apiCheck";
import Game from "@/components/game";
import MainMenu from "@/components/mainmenu";
import { useState } from "react";

export default function HomePage() {
  const [page, setPage] = useState("betaTest1");
  return (
    <div className="flex flex-row h-full w-full">
      {page === "game" && <Game />}
      {page === "menu" && <MainMenu />}
      {page === "betaTest1" && <KeyInput setPage={setPage} />}
    </div>
  );
}
