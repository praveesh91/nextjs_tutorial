"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "products", href: "/products" },
  { name: "profile", href: "/profile" },
];

const Header = () => {
  const path = usePathname();

  return (
    <header className="px-2 py-3 bg-black text-center">
      <nav className="flex justify-center gap-6">
        {navLinks.map((link) => {
          const isActive = path === link.href;

          return (
            <Link
              key={link.href}
              className={`px-2 py-1 text-xl font-medium transition-colors duration-200 ${
                isActive
                  ? "text-blue-50 bg-blue-500 rounded"
                  : "text-white hover:text-blue-500"
              }`}
              href={link.href}
            >
              <span className="capitalize">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
