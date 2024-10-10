"use client";
import React, { useMemo } from "react";
import { PostCard } from "./PostCard";
import { GuardianArticles, GuardianArticleSchema } from "@/lib/types";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  articles: GuardianArticles[];
}

export const Posts = ({ className, articles }: Props) => {
  const articlesList =
    useMemo(
      () =>
        articles.map((article) => {
          return {
            id: article?.id,
            webTitle: article?.webTitle,
            sectionName: article?.sectionName,
            fields: article?.fields,
          };
        }),
      [articles]
    ) || [];

  const router = useRouter();

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  if (articlesList.length === 0) {
    return (
      <h1 className="text-center text-bold text-2xl">No articles found</h1>
    );
  }
  return (
    <div className={`flex flex-wrap ${className}`}>
      {articlesList?.map((article, i) => (
        <div
          key={i}
          className="w-full md:w-6/12 lg:w-4/12 p-2"
          onClick={() => viewPost(article?.id as string)}
        >
          <PostCard article={article} />
        </div>
      ))}
    </div>
  );
};
