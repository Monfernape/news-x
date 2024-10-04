import React from "react";
import { Card } from "./ui/card";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

interface Props {
  className?: string;
}

export const Category = ({ className }: Props) => {
  return (
    <Card
      className={`w-80 rounded bg-white flex-shrink-0 self-start ${className}`}
    >
      <div className="flex justify-between items-center border-b p-4">
        <p className="font-poppin text-base text-medium">Category</p>
        <ArrowRightIcon />
      </div>
      <div className="flex flex-col gap-4 my-4 px-2 overflow-auto">
        {[...Array(5)].map(() => (
          <div key={0} className="flex gap-3">
            <div className="rounded-md bg-primary w-10 h-10"></div>
            <div className="flex flex-col gap-1">
              <span className="font-poppin text-sm font-mediuam text-font-light">
                Category Name
              </span>
              <span className="font-poppin text-base">Title</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
