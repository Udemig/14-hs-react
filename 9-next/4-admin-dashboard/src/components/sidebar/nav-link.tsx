"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  item: NavItem;
  isOpen: boolean;
}

const NavLink: FC<Props> = ({ item, isOpen }) => {
  const path = usePathname();
  const isActive = path === item.url;

  return (
    <Link
      href={item.url || ""}
      className={`flex items-center gap-2 p-5 hover:bg-gray-100 transition border-l-2 border-transparent group ${
        isActive ? "text-blue-500 bg-blue-50 border-blue-500!" : ""
      }`}
    >
      <div className="text-lg group-hover:scale-110 transition">{item.icon}</div>

      <span
        className={`whitespace-nowrap transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 w-0 overflow-hidden"
        }`}
      >
        {item.name}
      </span>
    </Link>
  );
};

export default NavLink;
