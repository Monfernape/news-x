"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "./icons/SearchIcon";
import Link from "next/link";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get current scroll position
    setIsSticky(scrollTop > 20); // Set sticky state if scrolled more than 50px
  };

  // Set up scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="p-4 flex justify-between gap-4 max-w-7xl mx-auto">
        <Link href="/" className="font-poppin font-medium text-base">
          Home
        </Link>
        <div className="relative flex items-center">
          <Input placeholder="Search" className="w-60" />
          <div className="absolute right-4">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
