"use client";

import Upgrades from "@/components/upgrades";
import MiddlePanel from "@/components/middle";
import RightPanel from "@/components/right-panel";

export default function Game() {
  return (
    <div className="flex flex-row h-full w-full">
      <Upgrades></Upgrades>
      <MiddlePanel></MiddlePanel>
      <RightPanel></RightPanel>
    </div>
  );
}
