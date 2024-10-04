import React from "react";
import { Button } from "./ui/button";
import { PostCard } from "./PostCard";

export const MoreArticles = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <p className="text-lg font-semibold font-poppin">More Artticles</p>
        <Button>View</Button>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full sm:w-6/12 md:w-4/12 p-2">
          <PostCard />
        </div>
        <div className="w-full sm:w-6/12 md:w-4/12 p-2">
          <PostCard />
        </div>
        <div className="w-full sm:w-6/12 md:w-4/12 p-2">
          <PostCard />
        </div>
      </div>
    </div>
  );
};
