"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "text-blue-500" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
