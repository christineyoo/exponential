import Link from "next/link";
import React from "react";
import { CgDebug } from "react-icons/cg";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex px-5 h-14 border-b items-center space-x-6">
      <Link href="/">
        <CgDebug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li className="text-pink-500 hover:text-pink-800 transition-colors">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
