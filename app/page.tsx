"use client";
import { useEffect, useState } from "react";
import { Category } from "@/components/Category";
import { Posts } from "@/components/Posts";
import { Trending } from "@/components/Trending";
import { MobileCategory } from "@/components/MobileCategory";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  console.log("isMobile", isMobile);

  return (
    <div className="flex gap-4 bg-primary-dark py-4 flex-wrap md:flex-nowrap">
      <div className="w-full flex flex-col gap-4">
        <Trending />
        {isMobile && <MobileCategory />}
        <Posts />
      </div>
      {!isMobile && <Category />}
    </div>
  );
}
