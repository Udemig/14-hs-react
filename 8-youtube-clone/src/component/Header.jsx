import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between gap-4 px-4 h-14">
      {/* Sol: Logo */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-zinc-400 rounded-full transition duration-200">
          <MdMenu className="text-xl md:text-2xl" />
        </button>

        <button className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">YouTube</span>
        </button>
      </div>

      {/* Orta: Arama */}
      <div className="flex-1 max-w-[728px] mx-4 flex justify-center items-center">
        <form className="flex w-full max-w-[640px] items-center">
          <div className="flex flex-1">
            <input
              type="text"
              className="w-full h-10 px-4 bg-[#121212] border border-zinc-400 rounded-l-full text-white placeholder:text-[#aaaaaa] focus:border-[#1c62b9] outline-none"
              placeholder="Ara"
            />

            <button className="w-16 h-10 bg-[#222222] border border-zinc-400 rounded-r-full flex justify-center items-center hover:bg-zinc-700 transition">
              <CiSearch className="text-xl text-white" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-zinc-700 transition rounded-full max-sm:hidden">
            <MdMic />
          </button>
        </form>
      </div>

      {/* Sol: Icons */}
      <div className="flex items-center gap-2">
        <button className="icon">
          <IoIosVideocam />
        </button>
        <button className="icon">
          <MdApps />
        </button>
        <button className="icon">
          <FaBell />
        </button>
        <button className="icon">
          <RiAccountCircleLine />
        </button>
      </div>
    </header>
  );
};

export default Header;
