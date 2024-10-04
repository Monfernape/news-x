"use client";
import React, { useEffect, useState } from "react";
import { Trending } from "./Trending";
import { MobileCategory } from "./MobileCategory";
import { Posts } from "./Posts";
import { Category } from "./Category";
import { useNewsContext } from "@/app/context/NewsContext";
import { Articles } from "@/lib/types";
import { fetchNewsData } from "@/lib/fetchNews";
import { debounceFn } from "@/lib/utils";

type Props = {
  articlesList: Articles;
};

export const NewsFeed = ({ articlesList }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { searchQuery } = useNewsContext();

  const [articles, setArticles] = useState(articlesList);

  async function handleUniversalSearch() {
    const articlesList = await fetchNewsData(searchQuery);

    setArticles(articlesList);
  }

  useEffect(() => {
    if (searchQuery) {
      debounceFn(handleUniversalSearch, 500)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

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
  return (
    <div className="flex gap-4 bg-primary-dark py-4 flex-wrap md:flex-nowrap">
      <div className="w-full flex flex-col gap-4">
        <Trending articles={articles.newsApiArticles} />
        {isMobile && <MobileCategory />}
        <Posts articles={articles} />
      </div>
      {!isMobile && <Category />}
    </div>
  );
};
