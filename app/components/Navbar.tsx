"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import SearchAndDatePickerModal from "@/app/search/component/SearchAndDatePickerModal";

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

  const { id } = useParams();

  return (
    <div
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="p-4 flex justify-center md:justify-between items-center gap-4 max-w-7xl mx-auto flex-wrap md:flex-nowrap">
        <Link href="/" className={id ? "mx-auto" : ""}>
          <Image src="/images/logo.svg" alt="logo" width={100} height={50} />
        </Link>
        {!id && <SearchAndDatePickerModal />}
      </div>
    </div>
  );
};
