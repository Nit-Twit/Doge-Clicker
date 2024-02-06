"use client";

import Upgrades from "@/components/upgrades";
import RightPanel from "@/components/right-panel";
import Image from "next/image";
import { useState, useRef } from "react";

function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {
  console.log(e.target);
  e.target = "/images/dogeBark.png";
}

export default function HomePage() {
  return (
    <div className="flex flex-row h-full">
      <Upgrades></Upgrades>
      <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-teal-300 from-cyan-600 items-center justify-center">
        <h1 className="text-4xl py-4 text-black">Dogecoin: 0</h1>
        <Image
          width={250}
          height={250}
          className="doge w-[15vw] h-[15vw]"
          alt="doge"
          src={"/images/doge.png"}
          onClick={handleImageClick}
          priority={true}
        ></Image>
      </div>
      <RightPanel></RightPanel>
    </div>
  );
}
