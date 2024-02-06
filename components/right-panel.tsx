export default function RightPanel() {
  return (
    <div className="w-[20vw] border-l-[7px] bg-white border-black text-black">
      <div className="flex flex-col u1 border-b-[7px] h-[50%] border-black bg-gradient-radial from-[#f700ff] to-[#9910bb]">
        <h1 className="text-3xl font-semibold py-2 border-b-[7px] border-black">
          Changelog
        </h1>
      </div>
      <div className="flex flex-col u1 h-[50%] bg-gradient-radial from-[#ffae00] to-[#bb8510]">
        <h1 className="text-3xl font-semibold py-2 border-b-[7px] border-black">
          Powerups
        </h1>
      </div>
    </div>
  );
}
