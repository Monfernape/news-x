"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "./icons/SearchIcon";

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
        <div className="flex">Home</div>
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
