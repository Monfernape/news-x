import React from "react";
import { Label } from "./ui/label";
import { GuardianArticleSchema } from "@/lib/types";

interface Props {
  tags?: GuardianArticleSchema[];
}

export const Tags = ({ tags }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Label className="font-news font-semibold text-xl">Tags</Label>
      <div className="flex flex-wrap gap-2 w-full md:w-80 rounded bg-white flex-shrink-0 self-start p-4">
        {tags?.map((tag, index) => (
          <div key={index} className="bg-primary rounded-md px-2 py-1 flex items-center ">
            <Label className="text-white font-news">{tag.webTitle}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
