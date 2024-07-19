"use client";
import { useState } from "react";

export default function Doge() {
    const [src, setSrc] = useState("/images/doge.png");

    const handleClick = () => {
        setSrc("/images/dogeBark.png");
        console.log("doge clicked")
        setTimeout(() => {
            setSrc("/images/doge.png");
        }, 200);
    };

    return (
        <button onClick={handleClick}>
            <img
                width={250}
                height={250}
                className="doge"
                alt="doge"
                src={src}
            />
        </button>
    );

}