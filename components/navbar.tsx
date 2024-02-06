import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className={`flex items-center justify-start gap-5 text-2xl text-white border-t-[7px] border-black bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 h-[12vh]`}
    >
      <Link className={`pl-4 cursor-pointer`} href="https://www.imakegamez.com">
        IMG Home
      </Link>
      <a className={`cursor-pointer`}>Avatar Selection</a>
      <a className={`cursor-pointer`}>User Search</a>
      <a className={`cursor-pointer`}>Settings</a>
      <Link
        className={`cursor-pointer`}
        href="https://github.com/I-make-gamez/I-make-gamez"
      >
        Source Code
      </Link>
      <Link className={`cursor-pointer`} href="https://github.com/I-make-gamez">
        IMG
      </Link>
      <Link className={`cursor-pointer`} href="https://discord.gg/7vnwbMr8ed">
        Discord
      </Link>
      <a className={`cursor-pointer`}>Version:</a>
    </div>
  );
}
