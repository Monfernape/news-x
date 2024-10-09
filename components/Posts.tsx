import React, { useMemo } from "react";
import { PostCard } from "./PostCard";
import { Articles, Data, GuardianArticleSchema } from "@/lib/types";
import { getGuardianNewsFormattedData } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { LoadingWrapper } from "./ui/LoadingWrapper";

interface Props {
  className?: string;
  articles: GuardianArticleSchema[];
}

export const Posts = ({ className, articles }: Props) => {
  const articlesList =
    useMemo(() => {
      const formattedNewList = [
        ...getGuardianNewsFormattedData(articles),
      ];

      return formattedNewList;
    }, [articles]) || [];

  const router = useRouter();

  const viewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  return (
    <LoadingWrapper
      isLoading={articlesList?.length === 0}
      hideContentWhileLoading
    >
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
    </LoadingWrapper>
  );
};
