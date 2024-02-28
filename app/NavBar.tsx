"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { CgDebug } from "react-icons/cg";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();
  const { status, data: session } = useSession();

  return (
    <nav className="flex px-5 h-14 border-b items-center space-x-6">
      <Link href="/">
        <CgDebug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={classnames({
              "text-pink-900 font-semibold": link.href === pathname,
              "text-pink-500": link.href !== pathname,
              "hover:text-pink-800 transition-colors": true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Log in</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
