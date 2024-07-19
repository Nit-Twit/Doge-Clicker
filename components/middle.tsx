"use client";

import { useState } from "react";

export default function MiddlePanel() {
    const [src, setSrc] = useState("/images/doge.png");

    const handleClick = () => {
        setSrc("/images/dogeBark.png");
        setTimeout(() => {
            setSrc("/images/doge.png");
        }, 200);
    };

    return (
        <div className="flex w-[60%] bg-gradient-radial flex-col h-full to-[#08fbff] from-[#0076ff] items-center justify-center">
            <h1 className="text-4xl font-semibold py-4 text-black">DogeCoin: 0</h1>
            <button onClick={handleClick}>
                <img
                    width={250}
                    height={250}
                    className="doge"
                    alt="doge"
                    src={src}
                />
            </button>
        </div>
    );
}
