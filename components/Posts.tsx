import React from "react";
import { PostCard } from "./PostCard";

interface Props {
  className?: string;
}

export const Posts = ({ className }: Props) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {[...Array(30)].map((_, i) => (
        <div key={i} className="w-full md:w-6/12 lg:w-4/12 p-2">
          <PostCard />
        </div>
      ))}
    </div>
  );
};
