import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { GuardianArticleSchema } from "@/lib/types";

interface Props {
  className?: string;
  article: GuardianArticleSchema;
}

export const PostCard = ({ className, article }: Props) => {
  const { fields, webTitle, sectionName } = article;
  return (
    <Card
      className={`rounded-lg p-2 h-full group overflow-hidden cursor-pointer ${className}`}
    >
      <Image
        src={fields?.thumbnail || "/images/no-preview.jpg"}
        alt=""
        className="w-full h-48 rounded group-hover:scale-105 transition-all duration-300 object-cover"
        width={300}
        height={200}
      />
      <div className="py-4 flex flex-col gap-2">
        <p className="font-news text-sm font-mediuam text-font-light">
          {sectionName ?? ""}
        </p>
        <p className="font-news text-base font-medium">{webTitle}</p>
      </div>
    </Card>
  );
};
