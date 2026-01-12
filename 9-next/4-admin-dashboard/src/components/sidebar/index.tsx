"use client";

import { links } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./nav-link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-5 border-r border-zinc-300 transition-all duration-200 shadow-lg bg-white text-gray-500 ${
        isOpen ? "min-w-37.5" : "min-w-15"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-5 text-2xl cursor-pointer hover:text-blue-400 transition"
      >
        <RxHamburgerMenu />
      </button>

      <div>
        {links.map((i, key) => (
          <NavLink item={i} key={key} isOpen={isOpen} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
