"use client";
import React, { useMemo } from "react";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { MoreArticles } from "@/app/components/MoreArticles";
import { Tags } from "@/app/components/Tags";
import { LoadingWrapper } from "@/components/ui/LoadingWrapper";
import { GuardianArticleViewSchema } from "@/lib/types";

interface Props {
  news: GuardianArticleViewSchema;
}

export const NewsDetail = ({ news }: Props) => {
  const formattedNews = useMemo(() => {
    const formattedNews = {
      ...news,
      content: {
        ...news.content,
        webPublicationDate: Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(new Date(news?.content?.webPublicationDate as string)),
      },
    };
    return formattedNews;
  }, [news]);

  return (
    <LoadingWrapper isLoading={!news}>
      <div className="flex flex-col py-4 gap-6 w-full">
        <div className="flex items-center gap-2 justify-center">
          <div className="bg-chip py-1 px-3 rounded-lg">
            <p className="font-news text-xs">{news?.content?.sectionName}</p>
          </div>
          <p className="font-news text-sm tetx-font-light">
            {formattedNews?.content?.webPublicationDate}
          </p>
        </div>

        <p className="font-news text-5xl text-center">
          {news?.content?.webTitle}
        </p>
        <hr />
        <div className="flex justify-center">
          <Image
            src={news?.content?.fields?.thumbnail ?? ""}
            width={100}
            height={100}
            alt=""
            className="max-w-96 w-full h-64 rounded object-cover"
          />
        </div>
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <div className="flex gap-4 flex-col">
            {news?.content?.fields?.body ? (
              <>
                <Label className="font-news font-semibold text-2xl">
                  Description
                </Label>
                <div
                  className="font-news text-lg flex flex-col gap-4 [&>p>a]:font-bold"
                  dangerouslySetInnerHTML={{
                    __html: news?.content?.fields?.body,
                  }}
                />
              </>
            ) : (
              "No Description"
            )}
          </div>
          <Tags tags={news?.content?.tags} />
        </div>
        <hr className="bg-black h-1" />

        {news?.relatedContent && (
          <MoreArticles newsArticles={news?.relatedContent} />
        )}
      </div>
    </LoadingWrapper>
  );
};
