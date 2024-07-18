import Image from "next/image";
import AudioPlayer from "@/components/audioLoop";

export default function MainMenu() {
    return (
        <div className="flex w-screen h-screen">
            <Image src="/images/menubg.jpg
            " alt="Doge" fill />
            <AudioPlayer />
        </div>
    )
}