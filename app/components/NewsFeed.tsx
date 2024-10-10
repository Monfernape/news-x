"use client";
import React from "react";
import { Trending } from "./Trending";
import { MobileCategory } from "./MobileCategory";
import { Posts } from "./Posts";
import { GuardianArticles } from "@/lib/types";
import { Label } from "../../components/ui/label";
import { Category } from "./Category";

type Props = {
  articles: GuardianArticles[];
};

export const NewsFeed = ({ articles }: Props) => {
  return (
    <div className="flex gap-4 bg-primary-dark py-4 flex-wrap md:flex-nowrap">
      <div className="w-full flex flex-col gap-4">
        <Label className="font-news font-semibold text-xl">Latest</Label>
        <Trending />
        <hr className="bg-black h-1" />
        <div className="flex flex-col gap-4 md:hidden">
          <Label className="font-news font-semibold text-xl -mb-3">
            Sports
          </Label>
          <MobileCategory />
        </div>

        <Label className="font-news font-semibold text-xl -mb-3">
          Features
        </Label>
        <Posts articles={articles} />
      </div>
      <div className="hidden md:block">
        <Category />
      </div>
    </div>
  );
};
