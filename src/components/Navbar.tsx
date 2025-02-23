"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/login" ? "active" : ""}>
          <Link href="/login">Connect</Link>
        </li>
        <li className={pathname === "/register" ? "active" : ""}>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}