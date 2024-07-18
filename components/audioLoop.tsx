"use client";

import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.loop = true;
      audioElement.play().catch(error => {
        console.error("Audio play was prevented:", error);
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="menu-loop.mp3"
      autoPlay
      controls
      className="hidden"
    ></audio>
  );
};

export default AudioPlayer;
