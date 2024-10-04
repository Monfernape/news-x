import React, { useMemo } from "react";
import { PostCard } from "./PostCard";
import { Articles } from "@/lib/types";
import {
  getGuardianNewsFormattedData,
  getNewsApiFormattedData,
  getNYTNewsFormattedData,
} from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  articles: Articles;
}

export const Posts = ({ className, articles }: Props) => {
  const articlesList =
    useMemo(() => {
      const formattedNewList = [
        ...getNewsApiFormattedData(articles.newsApiArticles),
        ...getGuardianNewsFormattedData(articles.guardianArticles),
        ...getNYTNewsFormattedData(articles.nytArticles),
      ];

      return formattedNewList;
    }, [articles]) || [];

  const router = useRouter();

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

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
