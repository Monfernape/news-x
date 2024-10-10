"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/ui/card";
import { addEllipsis } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "../../components/ui/label";
import { getGuardianNewsArticles } from "@/lib/api.service";

interface Props {
  className?: string;
}

interface SectionData {
  id: string;
  webTitle: string;
  sectionName: string;
  fields: {
    thumbnail: string;
  };
}

export const Category = ({ className }: Props) => {
  const [newsCategory, setNewsCategory] = useState<SectionData[]>([]);

  const router = useRouter();

  useEffect(() => {
    getGuardianNewsArticles({
      searchQuery: "sport",
    }).then((res) => {
      setNewsCategory(res as unknown as SectionData[]);
    });
  }, []);

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Label className="font-news font-semibold text-xl">Sports</Label>

      <Card
        className={`w-80 rounded bg-white flex-shrink-0 self-start ${className}`}
      >
        <div className="flex flex-col gap-4 my-4 px-2 overflow-auto">
          {newsCategory?.slice(0, 6)?.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 cursor-pointer"
              onClick={() => viewPost(item.id)}
            >
              <div className="rounded-md w-10 h-10 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.fields.thumbnail}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full object-fill"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-news text-sm font-mediuam text-font-light">
                  {item?.sectionName}
                </span>
                <span className="font-news text-base">
                  {addEllipsis(item?.webTitle, 60)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
