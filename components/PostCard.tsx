import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { NewsArticle } from "@/lib/types";

interface Props {
  className?: string;
  article: NewsArticle;
}

export const PostCard = ({ className, article }: Props) => {
  return (
    <Card className={`rounded-lg p-2 h-full ${className}`}>
      <Image
        src={article?.imageUrl ?? ""}
        alt=""
        className="w-full h-48 rounded"
        width={300}
        height={200}
      />
      <div className="py-4 flex flex-col gap-2">
        <p className="font-poppin text-sm font-mediuam text-font-light">
          {article?.category ?? ""}
        </p>
        <p className="font-poppin text-base font-medium">{article?.title}</p>
      </div>
    </Card>
  );
};
