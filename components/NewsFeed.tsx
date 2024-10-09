"use client";
import React, { useEffect, useState } from "react";
import { Trending } from "./Trending";
import { MobileCategory } from "./MobileCategory";
import { Posts } from "./Posts";
import { Category } from "./Category";
import { useNewsContext } from "@/app/context/NewsContext";
import { GuardianArticleSchema } from "@/lib/types";
import { fetchNewsData } from "@/lib/fetchNews";
import { debounceFn } from "@/lib/utils";
import { Label } from "./ui/label";

type Props = {
  articlesList: GuardianArticleSchema[];
};

export const NewsFeed = ({ articlesList }: Props) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const { searchQuery, fromDate, toDate, section } = useNewsContext();

  const [articles, setArticles] = useState(articlesList);

  async function handleUniversalSearch() {
    const articlesList = await fetchNewsData(
      searchQuery,
      fromDate !== "" ? fromDate : undefined,
      toDate !== "" ? toDate : undefined,
      section !== "" ? section : undefined
    );

    setArticles(articlesList as unknown as GuardianArticleSchema[]);
  }

  useEffect(() => {
    debounceFn(handleUniversalSearch, 500)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, fromDate, toDate, section]);

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
        <Label className="font-news font-semibold text-xl">Latets</Label>
        <Trending />
        <hr className="bg-black h-1" />
        {isMobile && (
          <>
            <Label className="font-news font-semibold text-xl -mb-3">
              Sports
            </Label>
            <MobileCategory />
          </>
        )}
        <Label className="font-news font-semibold text-xl -mb-3">
          Features
        </Label>
        <Posts articles={articles} />
      </div>
      {!isMobile && <Category />}
    </div>
  );
};
